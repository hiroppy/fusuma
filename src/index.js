'use strict';

const ghpages = require('gh-pages');
const { spawn } = require('child-process-promise');
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

async function pdf(input, output = 'slide.pdf') {
  await spawn('npx', ['decktape', 'automatic', input, output]);
}

module.exports = {
  start,
  build,
  deploy,
  pdf
};
