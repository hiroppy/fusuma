'use strict';

const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');

function dev() {
  return {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',
    output: {
      filename: 'bundle.js',
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new FriendlyErrorsWebpackPlugin()],
  };
}

module.exports = dev;
