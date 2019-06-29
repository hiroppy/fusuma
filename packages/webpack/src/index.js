'use strict';

const combineConfig = require('./webpack.config');

async function start(config) {
  const server = require('./server');

  return await server(combineConfig(config), { port: 8080 });
}

function build(config, isConsoleOutput = true) {
  const webpack = require('webpack');
  const outputBuildInfo = require('./outputBuildInfo');

  return new Promise((resolve, reject) => {
    webpack(combineConfig(config), (err, res) => {
      if (err) {
        return reject(err);
      }

      if (isConsoleOutput) {
        outputBuildInfo(res);
      }

      resolve();
    });
  });
}

module.exports = {
  start,
  build
};
