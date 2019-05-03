'use strict';

function dev() {
  return {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',
    output: {
      filename: 'bundle.js'
    },
    devServer: {
      hot: true,
      port: 8080,
      inline: true,
      contentBase: '.'
    }
  };
}

module.exports = dev;
