'use strict';

const visit = require('unist-util-visit');
const mdxAstToMdxHast = require('@mdx-js/mdx/mdx-ast-to-mdx-hast');
const { toJSX } = require('@mdx-js/mdx/mdx-hast-to-jsx');
const transformQrToJSX = require('./transformers/transformQrToJSX');
const transformScreenToJSX = require('./transformers/transformScreenToJSX');
const transformChartToJSX = require('./transformers/transformChartToJSX');
const transformMarkdownImageNodeToJSX = require('./transformers/transformMarkdownImageNodeToJSX');
const transformExecJSCodeButtonToJSX = require('./transformers/transformExecJSCodeButtonToJSX');
const escapeMap = require('./escapeMap');

function mdxPlugin() {
  return (tree) => {
    const slides = [];
    let slide = [];
    let props = {};
    let videoId = 1;
    let mermaidId = 1;

    // TODO: refactor using visit
    tree.children.forEach((n, i) => {
      const { type, value, lang, meta } = n;

      // move to a new slide
      if (type === 'thematicBreak') {
        slides.push({ slide, props });
        slide = [];
        props = {};
        return;
      }

      if (type === 'comment') {
        const [p, ...rest] = value.trim().split(':');
        const prefix = p.split('\n')[0];
        const attr = rest.map((r) => r.trim());

        if (prefix === 'sectionTitle') {
          props.sectionTitle = attr.join('');
          return;
        }
        if (prefix === 'classes') {
          props.classes = attr.join(' ');
          return;
        }
        if (prefix === 'contents') {
          props.contents = true;
          return;
        }
        if (prefix === 'note') {
          const [, ...note] = p.split('\n');

          props.note = note
            .join('')
            .replace(/[&<>"']/gim, (m) => escapeMap[m])
            .replace(/\n/g, '\\n');

          return;
        }
        if (prefix === 'qr') {
          slide.push({
            ...n,
            ...transformQrToJSX(attr),
          });
          return;
        }
        if (prefix === 'screen') {
          props.screen = true;
          slide.push({
            ...n,
            ...transformScreenToJSX(videoId),
          });
          ++videoId;
          return;
        }
        if (prefix === 'executable-code') {
          const nextNode = tree.children[i + 1];

          if (nextNode.type === 'code' && ['js', 'javascript'].includes(nextNode.lang)) {
            props.hasExecutableCode = true;
            slide.push({
              ...n,
              ...transformExecJSCodeButtonToJSX(nextNode.value),
            });
          }

          return;
        }
      }

      if (type === 'code') {
        if (lang === 'chart') {
          slide.push({
            ...n,
            ...transformChartToJSX(mermaidId, value),
          });

          ++mermaidId;
          return;
        }
        if (meta) {
          const lines = n.meta.match(/line="(.+?)"/);

          if (lines === null) {
            slide.push(n);
          } else {
            const line = lines[1];
            const hash = mdxAstToMdxHast()(n);
            const value = toJSX(hash).replace('<pre>', `<pre data-line="${line}">`);

            slide.push({
              ...n,
              type: 'jsx',
              value,
            });
          }
          return;
        }
      }

      visit(n, null, (node) => {
        if (node.type === 'image') {
          const { type, value } = transformMarkdownImageNodeToJSX(node);

          node.type = type;
          node.value = value;
          delete node.alt;
          delete node.title;
          delete node.url;
        }
      });

      slide.push(n);

      if (type === 'jsx') {
        n.value = value
          .replace(/src="(.+?\.(png|jpg|gif|svg?))"/g, 'src={require("$1")}')
          .replace(/class=/g, 'className=');
      }
    });
    const res = {
      jsx: [],
      fusumaProps: [],
    };

    // push last slide
    slides.push({ slide, props });

    slides.forEach(({ slide, props }) => {
      const hash = mdxAstToMdxHast()({
        type: 'root',
        children: slide,
      });
      let mdxJSX = toJSX(hash)
        // TODO: refactor
        .replace(/{\s.+\/\* block-end \*\/\s.+}/gm, '</div>');

      const matches = mdxJSX.matchAll(/{\s.+\/\* block-start:?(.*?) \*\/\s.+}/gm);

      for (const pos of matches) {
        const [, className] = pos;
        const div = className ? `<div className="${className.trim()}">` : '<div>';
        mdxJSX = mdxJSX.replace(/{\s.+\/\* block-start:?(.*?) \*\/\s.+}/m, div);
      }

      // jsx variable is established, so we don't use babel/parser
      const jsx = mdxJSX.match(/<MDXLayout.+?>([\s\S]*)<\/MDXLayout>/m);

      if (jsx) {
        const template = `
          (props) => (
            <>
              ${jsx[1]}
            </>
          )`;
        const fusumaProps = `{${Object.entries(props)
          .map(([key, value]) => `${key}: '${value}'`)
          .join(',')}}`;

        res.jsx.push(template);
        res.fusumaProps.push(fusumaProps);
      }
    });

    // we have to transform one src to an array because we separate slides using ---
    // Identifier 'slides' has already been declared
    tree.children.push({
      type: 'export',
      default: false,
      value: `
        import React from 'react';
        import { mdx } from '@mdx-js/react';
        export const slides = [${res.jsx.join(',\n')}];
        export const fusumaProps = [${res.fusumaProps.join(',\n')}];`,
    });
  };
}

module.exports = mdxPlugin;
