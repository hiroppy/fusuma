'use strict';

const { getOptions } = require('loader-utils');
const mdx = require('@mdx-js/mdx');
const walk = require('./walk');

function mdxLoader(src) {
  const cb = this.async();
  const result = mdx.sync(src, {
    remarkPlugins: [walk],
  });

  cb(null, result);
}

module.exports = mdxLoader;
