'use strict';

const combineConfig = require('./webpack.config');

async function start(config) {
  const server = require('../server/devServer');

  await server(combineConfig('development', config), config);
}

async function build(config) {
  return new Promise((resolve, reject) => {
    const webpack = require('webpack');

    webpack(combineConfig('production', config), (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = {
  start,
  build,
};
