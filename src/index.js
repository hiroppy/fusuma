'use strict';

const ghpages = require('gh-pages');
const { start: webpackStart, build: webpackBuild } = require('./webpack');
const webpackConfig = require('./webpack/webpack.config');

async function start(config, cb) {
  await webpackStart(webpackConfig(config), cb);
}

async function build(config) {
  await webpackBuild(webpackConfig(config));
}

function deploy(dir) {
  return new Promise((resolve, reject) => {
    ghpages.publish(dir, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = {
  start,
  build,
  deploy
};
