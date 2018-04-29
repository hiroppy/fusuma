'use strict';

const { start: webpackStart, build: webpackBuild } = require('./webpack');
const webpackConfig = require('./webpack/webpack.config');

async function start(config, cb) {
  await webpackStart(webpackConfig(config), cb);
}

async function build(config) {
  await webpackBuild(webpackConfig(config));
}

async function deploy() {}

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

module.exports = {
  start,
  build,
  deploy
};
