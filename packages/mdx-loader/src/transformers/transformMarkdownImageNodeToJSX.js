'use strict';

const { toJSX } = require('@mdx-js/mdx/mdx-hast-to-jsx');
const mdxAstToMdxHast = require('@mdx-js/mdx/mdx-ast-to-mdx-hast');

function transformMarkdownImageNodeToJSX(node) {
  const hash = mdxAstToMdxHast()(node);
  let { src, alt } = hash.properties;
  let jsx;
  const style = {};

  if (alt === null || alt === undefined) {
    delete hash.properties.alt;
  }

  // Do not resolve remote url as a module
  if (!src.includes('http')) {
    delete hash.properties.src;

    const match = src.match(/(\?|&)?([w,h]=.+?(px|%))&?/gm);

    if (match) {
      // has.properties.src attaches `25` when fusuma uses %
      src = src.replace(/(\?|&)?([w,h]=.+?(px|%))&?/gm, '').replace(/(25)+$/g, '');

      match.forEach((v) => {
        const [key, value] = v.split('=').map((item, i) => {
          if (i === 0) {
            let k = item.replace(/[?|&]/g, '');

            if (k === 'w') {
              return 'width';
            }
            if (k === 'h') {
              return 'height';
            }
          }
          if (i === 1) {
            return item.replace('&', '');
          }
        });
        style[key] = value;
      });
    }

    jsx = toJSX(hash).replace(
      /<img(\s?.*)>/,
      `<img src={require('${src}')} ${
        Object.keys(style).length ? `style={${JSON.stringify(style)}}` : ''
      } $1>`
    );
  } else {
    jsx = toJSX(hash);
  }

  return {
    type: 'jsx',
    value: jsx,
  };
}

module.exports = transformMarkdownImageNodeToJSX;
