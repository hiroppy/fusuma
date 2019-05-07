'use strict';

const { relative } = require('path');
const http = require('http');
const handler = require('serve-handler');
const ghpages = require('gh-pages');
const { spawn } = require('child-process-promise');
const { start: webpackStart, build: webpackBuild } = require('./webpack');
const webpackConfig = require('./webpack/webpack.config');

async function start(config, cb) {
  await webpackStart(webpackConfig(config), cb);
}

async function build(config) {
  if (process.env.NODE_ENV === undefined) process.env.NODE_ENV = 'production';

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
  const publicPath = relative(process.cwd(), input);
  const server = http.createServer(async (req, res) => {
    return await handler(req, res, { public: publicPath });
  });

  server.listen(port);

  try {
    await spawn('npm', ['install', 'decktape', '--no-save']);
    await spawn('npx', ['decktape', 'webslides', `http://localhost:${port}`, output]);
  } catch (e) {
    console.error(e);
  } finally {
    server.close();
  }
}

module.exports = {
  start,
  build,
  deploy,
  pdf
};
