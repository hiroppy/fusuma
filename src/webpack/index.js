'use strict';

function start(config, cb) {
  const webpackDevServer = require('./webpack-dev-server');

  webpackDevServer(config, cb);
}

function build(config) {
  const webpack = require('webpack');
  const outputBuildInfo = require('./outputBuildInfo');

  return new Promise((resolve, reject) => {
    webpack(config, (err, res) => {
      if (err) reject(err);

      outputBuildInfo(res);

      resolve();
    });
  });
}

module.exports = {
  start,
  build
};
