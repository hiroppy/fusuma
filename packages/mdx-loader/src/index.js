'use strict';

const { getOptions } = require('loader-utils');
const mdx = require('@mdx-js/mdx');
const emoji = require('remark-emoji');
const frontmatter = require('remark-frontmatter');
const mdxPlugin = require('./mdxPlugin');

function mdxLoader(src) {
  const { math } = getOptions(this);
  const cb = this.async();
  const common = [
    [
      frontmatter,
      {
        type: 'toml',
        marker: '+',
        anywhere: true,
      },
    ],
    emoji,
    mdxPlugin,
  ];

  const remarkPlugins = math
    ? [require('remark-math'), require('remark-html-katex') /* avoid warnings */, ...common]
    : common;
  const result = mdx.sync(src, {
    remarkPlugins,
  });

  cb(null, result);
}

module.exports = mdxLoader;
