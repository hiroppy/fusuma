'use strict';

const loader = require('../cli/loader');
const getRemoteOriginUrl = require('../utils/getRemoteOriginUrl');
const { start: webpackStart } = require('../webpack');

async function start(config) {
  const spinner = loader('Starting server...').start();
  const remoteOrigin = await getRemoteOriginUrl();

  await webpackStart(config);

  spinner.stop();
}

module.exports = start;
