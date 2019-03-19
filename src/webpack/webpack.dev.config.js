'use strict';

const webpack = require('webpack');

function dev() {
  return {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',
    output: {
      filename: 'bundle.js'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      hot: true,
      quiet: true,
      port: 8080,
      inline: true,
      contentBase: '.'
    }
  };
}

module.exports = dev;
