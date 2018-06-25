'use strict';

const webpack = require('webpack');

function dev() {
  return {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()]
  };
}

module.exports = dev;
