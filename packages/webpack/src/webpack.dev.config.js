'use strict';

function dev() {
  const webpack = require('webpack');
  const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

  return {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',
    output: {
      filename: 'bundle.js'
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new FriendlyErrorsWebpackPlugin()]
  };
}

module.exports = dev;
