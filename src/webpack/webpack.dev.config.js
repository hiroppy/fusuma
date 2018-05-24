'use strict';

const webpack = require('webpack');

function dev() {
  return {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
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
