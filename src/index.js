'use strict';

const { start: webpackStart, build: webpackBuild } = require('./webpack');
const webpackConfig = require('./webpack/webpack.config');

async function start(config, cb) {
  await webpackStart(webpackConfig(config), cb);
}

async function build(config) {
  await webpackBuild(webpackConfig(config));
}

process.on('unhandledRejection', (err, p) => {
  console.log(err);
});

module.exports = {
  start,
  build
};
