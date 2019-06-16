'use strict';

const { start: webpackStart } = require('@fusuma/webpack');

async function start(config, cb) {
  await webpackStart(config, cb);
}

module.exports = start;
