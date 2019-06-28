'use strict';

function dev(serverConfig) {
  const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

  return {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',
    output: {
      filename: 'bundle.js'
    },
    devServer: {
      hot: true,
      port: serverConfig.port,
      quiet: true,
      inline: true,
      contentBase: '.',
      disableHostCheck: true
    },
    plugins: [new FriendlyErrorsWebpackPlugin()]
  };
}

module.exports = dev;
