'use strict';

const combineConfig = require('./webpack.config');

function start(config, cb) {
  const webpackDevServer = require('./webpack-dev-server');

  webpackDevServer(combineConfig(config), cb);
}

function build(config, isOutput = true) {
  const webpack = require('webpack');
  const outputBuildInfo = require('./outputBuildInfo');

  return new Promise((resolve, reject) => {
    webpack(combineConfig(config), (err, res) => {
      if (err) {
        return reject(err);
      }

      if (isOutput) {
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
