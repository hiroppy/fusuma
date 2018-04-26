'use strict';

const webpack = require('webpack');
const webpackDevServer = require('./webpack-dev-server');

function start(config, cb) {
  webpackDevServer(config, cb);
}

function build(config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, res) => {
      // console.log(res);
      if (err) reject(err);
      resolve();
    });
  });
}

module.exports = {
  start,
  build
};
