'use strict';

const visit = require('unist-util-visit');
const mdxAstToMdxHast = require('@mdx-js/mdx/mdx-ast-to-mdx-hast');
const { toJSX } = require('@mdx-js/mdx/mdx-hast-to-jsx');
const { htmlEscape } = require('escape-goat');
const toml = require('toml');
const transformQrToJSX = require('./transformers/transformQrToJSX');
const transformScreenToJSX = require('./transformers/transformScreenToJSX');
const transformChartToJSX = require('./transformers/transformChartToJSX');
const transformMarkdownImageNodeToJSX = require('./transformers/transformMarkdownImageNodeToJSX');
const transformExecJSCodeButtonToJSX = require('./transformers/transformExecJSCodeButtonToJSX');
const transformAccountToJSX = require('./transformers/transformAccountToJSX');
const commentParser = require('./commentParser');
const getLangsFile = require('@fusuma/prism-loader/src/getLangFiles');

function mdxPlugin() {
  return (tree) => {
    const slides = [];
    const langs = new Set();
    let slide = [];
    let props = {};
    let background = 0; // TODO: hmm... combine into fusumaProps but need to transform to `require`
    let videoId = 1;
    let mermaidId = 1;
    let isFragmentArea = false;
    let fragmentSteps = 0;
    let fragmentId = 0;

    function formatSlidesTimeline(fragmentSteps, fragmentId) {
      if (fragmentSteps === 0) {
        return [0];
      } else {
        return [[...Array(fragmentSteps)].fill(fragmentId)];
      }
    }

    // TODO: refactor using visit
    tree.children.forEach((n, i) => {
      const { type, value, lang, meta } = n;

      // move to a new slide
      if (type === 'thematicBreak') {
        slides.push({
          slide,
          props,
          background,
          fragmentSteps: formatSlidesTimeline(fragmentSteps, fragmentId),
        });
        slide = [];
        props = {};
        background = 0; // why 0? because null, undefined, '' are omitted at client side
        fragmentSteps = 0;
        fragmentId = 0;
        isFragmentArea = false;
        return;
      }

      if (type === 'toml') {
        const meta = toml.parse(value);

        if (meta.background) {
          background = meta.background.includes('/')
            ? `require("${meta.background}")`
            : `'${meta.background}'`;
        }
        if (meta.sectionTitle) {
          props.sectionTitle = meta.sectionTitle;
        }
        if (meta.classes) {
          props.classes = meta.classes;
        }
      }

      if (type === 'comment') {
        const { prefix, valueStr, valueArr } = commentParser(value);

        if (prefix === 'background') {
          background = valueStr.includes('/') ? `require(${valueStr})` : `'${valueStr}'`;
          return;
        }
        if (prefix === 'section-title') {
          props.sectionTitle = valueStr;
          return;
        }
        if (prefix === 'classes') {
          props.classes = valueArr;
          return;
        }
        if (prefix === 'block-start') {
          slide.push({
            ...n,
            type: 'jsx',
            value: valueArr.length === 0 ? '<div>' : `<div className="${valueArr.join(' ')}">`,
          });
          return;
        }
        if (prefix === 'block-end') {
          slide.push({
            ...n,
            type: 'jsx',
            value: '</div>',
          });
          return;
        }
        if (prefix === 'fragments-start') {
          fragmentId = Math.random();
          slide.push({
            ...n,
            type: 'jsx',
            value: `<Client.Fragments id={${fragmentId}}>`,
          });
          isFragmentArea = true;
          return;
        }
        if (prefix === 'fragments-end') {
          slide.push({
            ...n,
            type: 'jsx',
            value: '</ Client.Fragments>',
          });
          isFragmentArea = false;
          return;
        }
        if (prefix === 'contents') {
          props.contents = true;
          return;
        }
        if (prefix === 'note') {
          props.note = htmlEscape(valueStr).replace(/\n/g, '\\n');
          return;
        }
        if (prefix === 'account') {
          slide.push({
            ...n,
            ...transformAccountToJSX(valueArr),
          });
          return;
        }
        if (prefix === 'qr') {
          slide.push({
            ...n,
            ...transformQrToJSX(valueArr),
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

      if (isFragmentArea) {
        fragmentSteps++;
      }

      if (type === 'code') {
        if (lang === 'chart' || lang === 'mermaid') {
          slide.push({
            ...n,
            ...transformChartToJSX(mermaidId, value),
          });

          ++mermaidId;
          return;
        } else if (lang) {
          langs.add(lang);
        }

        if (meta) {
          const lines = n.meta.match(/line="(.+?)"/);

          if (lines === null) {
            slide.push(n);
          } else {
            const line = lines[1];
            const hash = mdxAstToMdxHast()(n);

            slide.push({
              ...n,
              type: 'jsx',
              value: toJSX(hash).replace('<pre>', `<pre data-line="${line}">`),
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
          .replace(/src="(.+?\.(png|jpg|gif|svg|mp4|webm?))"/g, 'src={require("$1")}')
          .replace(/class=/g, 'className=');
      }
    });

    // push last slide
    slides.push({
      slide,
      props,
      background,
      fragmentSteps: formatSlidesTimeline(fragmentSteps, fragmentId),
    });

    const res = {
      jsx: [],
      fusumaProps: [],
      background: [],
      fragmentSteps: [],
    };

    slides.forEach(({ slide, props, background, fragmentSteps }) => {
      const hash = mdxAstToMdxHast()({
        type: 'root',
        children: slide,
      });
      const mdxJSX = toJSX(hash);
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
        res.background.push(background);
        res.fragmentSteps.push(...fragmentSteps);
      }
    });

    // don't import as named to avoid using makeShortcode by mdx

    // we have to transform one src to an array because we separate slides using ---
    // Identifier 'slides' has already been declared
    tree.children.push({
      type: 'export',
      default: false,
      value: `
        import React from 'react';
        import { mdx } from '@mdx-js/react';
        import * as Client from '@fusuma/client';
        import * as Icons from 'react-icons/fa';
        ${Array.from(getLangsFile(Array.from(langs)))
          .map((lang) => `import '${lang}';`)
          .join('\n')}

        export const slides = [${res.jsx.join(',\n')}];
        export const backgrounds = [${res.background.join(',\n')}];
        export const fragmentSteps = ${JSON.stringify(res.fragmentSteps)};
        export const fusumaProps = [${res.fusumaProps.join(',\n')}];`,
    });
  };
}

module.exports = mdxPlugin;
