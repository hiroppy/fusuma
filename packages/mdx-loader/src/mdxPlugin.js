'use strict';

const qr = require('qrcode-generator');
const visit = require('unist-util-visit');

const mdxAstToMdxHast = require('@mdx-js/mdx/mdx-ast-to-mdx-hast');
const { toJSX } = require('@mdx-js/mdx/mdx-hast-to-jsx');
const transferMarkdownImageNodeToJSX = require('./transferMarkdownImageNodeToJSX');

function createFusumaProps(nodes) {
  const property = {};

  nodes.forEach(({ type, value }) => {
    if (type === 'comment') {
      const v = value.trim();

      if (v === 'contents') {
        property.contents = true;
      }
      if (v === 'screen') {
        property.screen = true;
      }
      if (v.slice(0, 4) === 'note') {
        // sanitize
        const escapeMap = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#x27;',
          // '/': '&#x2F;'
        };

        const s = v
          .slice(4)
          .trim()
          .replace(/[&<>"']/gim, (m) => escapeMap[m])
          .replace(/\n/g, '\\n');

        property.note = s;
      }
      if (v.slice(0, 8) === 'classes:') {
        property.classes = v.slice(8).trim();
      }
      if (v.slice(0, 13) === 'sectionTitle:') {
        property.sectionTitle = v.slice(13).trim();
      }
      // if (v.slice(0, 5) === 'line:') {
      //   property.lines = v.slice(13).trim();
      // }
    }
  });

  return `{${Object.entries(property)
    .map(([key, value]) => `${key}: '${value}'`)
    .join(',')}}`;
}

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
      if (n.type === 'thematicBreak') {
        slides.push(slide);
        slide = [];
      } else if (n.type === 'comment' && n.value.trim().includes('qr:')) {
        // TODO: need to validate
        const url = n.value.trim().split('qr:')[1].trim();

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
              // TODO: specify variables and refactor
              value: svg
                .replace('width="58px"', '')
                .replace('height="58px"', '')
                .replace('<svg ', '<svg className="qr"'),
            },
          ]
        );
      } else if (n.type === 'comment' && n.value.trim() === 'screen') {
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
      } else if (n.type === 'code' && n.lang === 'chart') {
        slide.push({
          ...n,
          type: 'jsx',
          value: `<div className="mermaid" id="mermaid-${mermaidId}" data-value="${n.value.replace(
            / {4}/g,
            ''
          )}" style={{ visibility: 'hidden'}}>${n.value.replace(/ {4}/g, '')}</div>`,
        });

        ++mermaidId;
      } else if (n.type === 'code' && n.meta) {
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
      } else {
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

        if (n.type === 'jsx') {
          n.value = n.value
            .replace(/src="(.+?\.(png|jpg|gif|svg?))"/g, 'src={require("$1")}')
            .replace(/class=/g, 'className=');
        }
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
