'use strict';

const qr = require('qrcode-generator');
const visit = require('unist-util-visit');
const mdxAstToMdxHast = require('@mdx-js/mdx/mdx-ast-to-mdx-hast');
const { toJSX } = require('@mdx-js/mdx/mdx-hast-to-jsx');
const createFusumaProps = require('./createFusumaProps');
const transferMarkdownImageNodeToJSX = require('./transferMarkdownImageNodeToJSX');

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
          if (['http', 'https'].includes(attr[0])) {
            const url = `${attr[0]}:${attr[1]}`;
            const q = qr(0, 'L');
            q.addData(url);
            q.make();
            const svg = q.createSvgTag();

            slide.push(
              ...[
                n,
                {
                  ...n,
                  type: 'jsx',
                  value: svg
                    .replace('width="58px"', '')
                    .replace('height="58px"', '')
                    .replace('<svg ', '<svg className="qr"'),
                },
              ]
            );

            return;
          }
        }

        if (prefix === 'screen') {
          slide.push(
            ...[
              n,
              {
                ...n,
                type: 'jsx',
                value:
                  '<div className="fusuma-screen">' +
                  '<div>This view can capture the screen.<br />' +
                  'Click to get started.;)<br /><br />' +
                  'Note: This feature runs only in Presenter Mode.' +
                  '</div>' +
                  `<video id="fusuma-screen-${videoId}" />` +
                  '</div>',
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
            type: 'jsx',
            value: `<div className="mermaid" id="mermaid-${mermaidId}" data-value="${n.value.replace(
              / {4}/g,
              ''
            )}" style={{ visibility: 'hidden'}}>${n.value.replace(/ {4}/g, '')}</div>`,
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
          const { type, value } = transferMarkdownImageNodeToJSX(node);
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
