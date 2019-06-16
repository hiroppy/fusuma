'use strict';

const mdx = require('@mdx-js/mdx');
const emoji = require('remark-emoji');
const fusumaMdxPlugin = require('./fusumaMdxPlugin');

module.exports = function fusumaLoader(src) {
  const cb = this.async();

  const result = mdx.sync(src, {
    remarkPlugins: [emoji, fusumaMdxPlugin]
  });

  cb(null, result);
};
