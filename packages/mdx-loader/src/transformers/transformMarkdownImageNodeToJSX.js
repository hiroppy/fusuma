'use strict';

const { toJSX } = require('@mdx-js/mdx/mdx-hast-to-jsx');
const mdxAstToMdxHast = require('@mdx-js/mdx/mdx-ast-to-mdx-hast');

function transformMarkdownImageNodeToJSX(node) {
  const hash = mdxAstToMdxHast()(node);
  const { src, alt } = hash.properties;
  let jsx;

  if (alt === null || alt === undefined) {
    delete hash.properties.alt;
  }

  // Do not resolve remote url as a module
  if (!src.includes('http')) {
    delete hash.properties.src;
    jsx = toJSX(hash).replace(/<img(\s?.*)>/, `<img src={require('${src}')} $1>`);
  } else {
    jsx = toJSX(hash);
  }

  return {
    type: 'jsx',
    value: jsx,
  };
}

module.exports = transformMarkdownImageNodeToJSX;
