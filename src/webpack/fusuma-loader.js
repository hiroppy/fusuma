'use strict';

const mdx = require('@mdx-js/mdx');
const fusumaMdxPlugin = require('./fusumaMdxPlugin');

module.exports = function fusumaLoader(src) {
  const cb = this.async();

  const result = mdx.sync(src, {
    remarkPlugins: [fusumaMdxPlugin]
  });

  cb(null, result);
};
