'use strict';

const { build: webpackBuild } = require('@fusuma/webpack');

async function build(config, isOutput) {
  if (process.env.NODE_ENV === undefined) process.env.NODE_ENV = 'production';

  await webpackBuild(config, isOutput);
}

module.exports = build;
