'use strict';

async function start(config) {
  const combineConfig = require('./webpack.config');
  const server = require('../server');

  await server(combineConfig('development', config), config);
}

async function build(config, cb) {
  const buildTask = require('./build');
  const stats = await buildTask(config, cb);

  return stats;
}

module.exports = {
  start,
  build,
};
