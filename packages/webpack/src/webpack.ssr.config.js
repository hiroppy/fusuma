'use strict';

const { join, resolve } = require('path');

function ssr({ clientBasePath }) {
  return {
    mode: 'none',
    // entry: [join(clientBasePath, '/src/ServerApp.js')],
    target: 'node',
    devtool: false,
    output: {
      filename: 'entry.js',
      libraryTarget: 'commonjs'
    }
  };
}

module.exports = ssr;
