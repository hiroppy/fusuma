'use strict';

const mdx = require('@mdx-js/mdx');
const emoji = require('remark-emoji');
const mdxPlugin = require('./mdxPlugin');

function mdxLoader(src) {
  const cb = this.async();

  const result = mdx.sync(src, {
    remarkPlugins: [emoji, mdxPlugin]
  });

  cb(null, result);
}

module.exports = mdxLoader;
