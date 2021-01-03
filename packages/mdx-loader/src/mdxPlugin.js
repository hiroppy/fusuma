'use strict';

const mdxAstToMdxHast = require('@mdx-js/mdx/mdx-ast-to-mdx-hast');
const { toJSX } = require('@mdx-js/mdx/mdx-hast-to-jsx');
const visit = require('unist-util-visit');
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
          "'": '&#x27;'
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
  return (tree, file) => {
    const slides = [];
    let slide = [];
    let fusumaProps = {};
    let videoId = 1;
    let mermaidId = 1;

    for (const node of tree.children) {
      const { type, lang, meta } = node;
      const value = typeof node.value === 'string' ? node.value.trim() : node.value;
      let establishedValue;

      function addToSlide(v) {
        // nested
        visit(node, null, (n) => {
          if (n.type === 'image') {
            const { type, value } = transferMarkdownImageNodeToJSX(n);
            n.type = type;
            n.value = value;
            delete n.alt;
            delete n.title;
            delete n.url;
          }
        });

        if (v) {
          slide.push({
            node: {
              ...node,
              type: 'jsx',
              value: v
            },
            fusumaProps
          });
        } else {
          if (type === 'jsx') {
            node.value = value
              .replace(/src="(.+?\.(png|jpg|gif|svg?))"/g, 'src={require("$1")}')
              .replace(/class=/g, 'className=');
          }

          slide.push({ node, fusumaProps });
          fusumaProps = {};
        }
      }

      if (type === 'thematicBreak' /* --- */) {
        slides.push(slide);
        slide = [];
        continue;
      }

      if (type === 'comment') {
        if (value.includes('qr:')) {
          const qr = require('qrcode-generator');
          // TODO: need to validate
          const url = value.split('qr:')[1].trim();
          const q = qr(0, 'L');

          q.addData(url);
          q.make();

          // TODO: specify variables and refactor
          establishedValue = q
            .createSvgTag()
            .replace('width="58px"', '')
            .replace('height="58px"', '')
            .replace('<svg ', '<svg className="qr"');
        }
        if (value === 'screen') {
          establishedValue =
            '<div className="fusuma-screen">' +
            '<div>This view can capture the screen.<br />' +
            'Click to get started.;)<br /><br />' +
            'Note: This feature runs only in Presenter Mode.' +
            '</div>' +
            `<video id="fusuma-screen-${videoId}" />` +
            '</div>';

          fusumaProps.screen = true;
          ++videoId;
        }
      }

      if (type === 'code') {
        if (lang === 'chart') {
          establishedValue = `<div className="mermaid" id="mermaid-${mermaidId}" data-value="${value.replace(
            /    /g,
            ''
          )}" style={{ visibility: 'hidden'}}>${value.replace(/    /g, '')}</div>`;

          ++mermaidId;
        }
        if (meta) {
          const lines = meta.match(/line="(.+?)"/);

          if (lines) {
            const line = lines[1];
            const hash = mdxAstToMdxHast()(node);

            establishedValue = toJSX(hash).replace('<pre>', `<pre data-line="${line}">`);
          }
        }
      }

      addToSlide(establishedValue);
    }

    // push last slide
    slides.push(slide);

    const res = {
      jsx: [],
      fusumaProps: []
    };

    slides.forEach((slide) => {
      const hash = mdxAstToMdxHast()({
        type: 'root',
        children: slide.map(({ node }) => node)
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
        const fusumaProps = createFusumaProps(slide.map(({ node }) => node));

        // for (const { fusumaProps } of slide) {
        //   const props = `{${Object.entries(fusumaProps)
        //     .map(([key, value]) => `${key}: '${value}'`)
        //     .join(',')}}`;
        // }

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
        export const fusumaProps = [${res.fusumaProps.join(',\n')}];`
    });
  };
}

module.exports = mdxPlugin;
