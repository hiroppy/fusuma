'use strict';

const { getOptions } = require('loader-utils');
const mdx = require('@mdx-js/mdx');
const emoji = require('remark-emoji');
const mdxPlugin = require('./mdxPlugin');

function mdxLoader(src) {
  const { math } = getOptions(this);
  const cb = this.async();
  const remarkPlugins = math
    ? [emoji, require('remark-math'), require('remark-html-katex') /* avoid warnings */, mdxPlugin]
    : [emoji, mdxPlugin];
  const result = mdx.sync(src, {
    remarkPlugins
  });

  cb(null, result);
}

module.exports = mdxLoader;
