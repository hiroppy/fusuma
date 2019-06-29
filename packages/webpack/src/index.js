'use strict';

const combineConfig = require('./webpack.config');

async function start(config) {
  const server = require('./server');

  return await server(combineConfig('development', config), { port: 8080 });
}

async function build(config, isConsoleOutput = true) {
  const buildTask = require('./build');

  return await buildTask(config);
}

module.exports = {
  start,
  build
};
