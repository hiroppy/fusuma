'use strict';

const loader = require('../cli/loader');
const fusuma = require('../configs/fusumarc');
const getRemoteOriginUrl = require('../utils/getRemoteOriginUrl');
const { start: webpackStart } = require('../webpack');

async function start(basePath, { port }) {
  const spinner = loader('Starting server...').start();
  const config = fusuma.combine(await fusuma.read(basePath));
  const remoteOrigin = await getRemoteOriginUrl();

  await webpackStart({
    ...config,
    port,
    internal: {
      basePath,
      remoteOrigin,
    },
  });

  spinner.stop();
}

module.exports = start;
