'use strict';

const combineConfig = require('./webpack.config');

async function start(config) {
  const server = require('./server');

  return await server(combineConfig('development', config), { port: 8080 });
}

async function build(config, isConsoleOutput = true, cb) {
  const buildTask = require('./build');
  const stats = await buildTask(config, cb);

  if (isConsoleOutput) {
    const outputBuildInfo = require('./outputBuildInfo');

    outputBuildInfo(stats);
  }
}

module.exports = {
  start,
  build
};
