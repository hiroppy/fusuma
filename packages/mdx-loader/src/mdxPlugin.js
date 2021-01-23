'use strict';

const visit = require('unist-util-visit');
const mdxAstToMdxHast = require('@mdx-js/mdx/mdx-ast-to-mdx-hast');
const { toJSX } = require('@mdx-js/mdx/mdx-hast-to-jsx');
const createFusumaProps = require('./createFusumaProps');
const transformQrToJSX = require('./transformers/transformQrToJSX');
const transformScreenToJSX = require('./transformers/transformScreenToJSX');
const transformChartToJSX = require('./transformers/transformChartToJSX');
const transformMarkdownImageNodeToJSX = require('./transformers/transformMarkdownImageNodeToJSX');

function mdxPlugin() {
  return (tree) => {
    const slides = [];
    let slide = [];
    let videoId = 1;
    let mermaidId = 1;
    const res = {
      jsx: [],
      fusumaProps: [],
    };

    // TODO: refactor using visit
    tree.children.forEach((n) => {
      const { type, value, lang, meta } = n;

      // move to a new slide
      if (type === 'thematicBreak') {
        slides.push(slide);
        slide = [];
        return;
      }

      if (type === 'comment') {
        const [prefix, ...rest] = value.trim().split(':');
        const attr = rest.map((r) => r.trim());

        if (prefix === 'qr') {
          slide.push(
            ...[
              n,
              {
                ...n,
                ...transformQrToJSX(attr),
              },
            ]
          );

          return;
        }

        if (prefix === 'screen') {
          slide.push(
            ...[
              n,
              {
                ...n,
                ...transformScreenToJSX(videoId),
              },
            ]
          );
          ++videoId;
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

    // push last slide
    slides.push(slide);

    slides.forEach((slide) => {
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
        const fusumaProps = createFusumaProps(slide);

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
