'use strict';

function dev() {
  return {
    mode: 'development',
    output: {
      filename: '[name].js'
    }
  };
}

module.exports = dev;
