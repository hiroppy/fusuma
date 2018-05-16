'use strict';

const serve = require('serve');
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

async function pdf(input, output = 'slide.pdf', port = 3455) {
  const server = serve(input, { port });

  await new Promise((resolve) => setTimeout(() => resolve(), 3000));

  try {
    await spawn('npx', ['decktape', 'automatic', `http://localhost:${port}`, output]);
  } catch (e) {
    console.error(e);
  } finally {
    server.stop();
  }
}

module.exports = {
  start,
  build,
  deploy,
  pdf
};
