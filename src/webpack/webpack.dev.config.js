'use strict';

const webpack = require('webpack');

function dev() {
  return {
    mode: 'development',
    output: {
      filename: '[name].js'
    }
  };
}

module.exports = dev;
