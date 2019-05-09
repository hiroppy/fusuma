'use strict';

function dev() {
  const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

  return {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',
    output: {
      filename: 'bundle.js'
    },
    devServer: {
      hot: true,
      port: 8080,
      quiet: true,
      inline: true,
      contentBase: '.',
      disableHostCheck: true
    },
    plugins: [new FriendlyErrorsWebpackPlugin()]
  };
}

module.exports = dev;
