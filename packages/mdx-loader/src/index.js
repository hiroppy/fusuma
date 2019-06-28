'use strict';

const { getOptions } = require('loader-utils');
const mdx = require('@mdx-js/mdx');
const emoji = require('remark-emoji');
const remarkMath = require('remark-math');
const katex = require('remark-html-katex');
const mdxPlugin = require('./mdxPlugin');

function mdxLoader(src) {
  const { math } = getOptions(this);
  const cb = this.async();
  const remarkPlugins = math
    ? [emoji, remarkMath, katex, fusumaMdxPlugin]
    : [emoji, fusumaMdxPlugin];
  const result = mdx.sync(src, {
    remarkPlugins
  });

  cb(null, result);
}

module.exports = mdxLoader;
