'use strict';

const visit = require('unist-util-visit');
const mdxAstToMdxHast = require('@mdx-js/mdx/mdx-ast-to-mdx-hast');
const { toJSX } = require('@mdx-js/mdx/mdx-hast-to-jsx');
const { htmlEscape } = require('escape-goat');
const transformQrToJSX = require('./transformers/transformQrToJSX');
const transformScreenToJSX = require('./transformers/transformScreenToJSX');
const transformChartToJSX = require('./transformers/transformChartToJSX');
const transformMarkdownImageNodeToJSX = require('./transformers/transformMarkdownImageNodeToJSX');
const transformExecJSCodeButtonToJSX = require('./transformers/transformExecJSCodeButtonToJSX');
const transformAccountToJSX = require('./transformers/transformAccountToJSX');
const commentParser = require('./commentParser');
const getLangsFile = require('@fusuma/prism-loader/src/getLangFiles');
const yaml = require('yaml');
const parseSlidesByDivider = require('./parseSlidesByDivider');
const walk = require('./walk');

function formatSlidesTimeline(fragmentSteps, fragmentId) {
  if (fragmentSteps === 0) {
    return [0];
  } else {
    return [[...Array(fragmentSteps)].fill(fragmentId)];
  }
}

function mdxPlugin() {
  return (tree) => {
    const parsedSlides = [];
    const langs = new Set();
    const slides = parseSlidesByDivider(tree);

    for (const slide of slides) {
      const { ast, props, background, fragmentSteps } = walk(slide, langs);

      parsedSlides.push({
        slide,
        props,
        background,
        fragmentSteps,
      });
    }

    const res = {
      jsx: [],
      fusumaProps: [],
      background: [],
      fragmentSteps: [],
    };

    parsedSlides.forEach(({ slide, props, background, fragmentSteps }) => {
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
        import * as Chakra from '@chakra-ui/react';
        import { motion as Motion } from 'framer-motion';
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
