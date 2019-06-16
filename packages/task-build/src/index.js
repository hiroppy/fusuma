'use strict';

const { build: webpackBuild } = require('@fusuma/webpack');

async function build(config) {
  if (process.env.NODE_ENV === undefined) process.env.NODE_ENV = 'production';

  await webpackBuild(config);
}

module.exports = build;
