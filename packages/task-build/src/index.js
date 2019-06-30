'use strict';

const { build: webpackBuild } = require('@fusuma/webpack');

async function build(config, isOutput, cb) {
  if (process.env.NODE_ENV === undefined) process.env.NODE_ENV = 'production';

  await webpackBuild(config, isOutput, cb);
}

module.exports = build;
