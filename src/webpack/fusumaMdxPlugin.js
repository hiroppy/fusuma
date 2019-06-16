'use strict';

const visit = require('unist-util-visit');
const mdxAstToMdxHast = require('@mdx-js/mdx/mdx-ast-to-mdx-hast');
const { toJSX } = require('@mdx-js/mdx/mdx-hast-to-jsx');
const { parse } = require('@babel/parser');

function createFusumaProps(nodes) {
  const property = {};

  nodes.forEach(({ type, value }) => {
    if (type === 'comment') {
      const v = value.trim();

      if (v === 'contents') {
        property.contents = true;
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
    }
  });

  return `{${Object.entries(property)
    .map(([key, value]) => `${key}: '${value}'`)
    .join(',')}}`;
}

function fusumaMdxPlugin() {
  return (tree, file) => {
    const slides = [];
    let slide = [];
    const res = {
      jsx: [],
      fusumaProps: []
    };

    tree.children.forEach((n) => {
      if (n.type === 'thematicBreak') {
        slides.push(slide);
        slide = [];
      } else {
        slide.push(n);
      }
    });

    // push last slide
    slides.push(slide);

    slides.forEach((slide) => {
      const hash = mdxAstToMdxHast()({
        type: 'root',
        children: slide
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
        export const fusumaProps = [${res.fusumaProps.join(',\n')}];`
    });
  };
}

module.exports = fusumaMdxPlugin;
