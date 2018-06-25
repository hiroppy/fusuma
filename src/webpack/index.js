'use strict';

const webpack = require('webpack');
const webpackServe = require('./webpack-serve');

function start(config, cb) {
  webpackServe(config, cb);
}

function build(config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, res) => {
      if (err) reject(err);
      resolve();
    });
  });
}

module.exports = {
  start,
  build
};
