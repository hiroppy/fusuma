'use strict';

const webpack = require('webpack');
const webpackConfig = require('./webpack/webpack.config');

// definePluginにすべてのmeta情報を埋め込む
async function build() {
  console.log('build');
}

module.exports = build;
