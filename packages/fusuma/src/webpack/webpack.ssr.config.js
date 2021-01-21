'use strict';

function ssr() {
  return {
    mode: 'none',
    target: 'node',
    devtool: false,
    output: {
      filename: 'entry.js',
      libraryTarget: 'commonjs',
    },
  };
}

module.exports = ssr;
