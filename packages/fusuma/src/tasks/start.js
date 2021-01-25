'use strict';

const Spinner = require('../cli/Spinner');
const getRemoteOriginUrl = require('../utils/getRemoteOriginUrl');
const { start: webpackStart } = require('../webpack');
const { warn } = require('../cli/log');

async function start(config) {
  process.env.NODE_ENV = 'development';

  const spinner = new Spinner();

  try {
    spinner.setContent({ color: 'green', text: 'Fetching the remote origin url...' });
    spinner.start();
    const remoteOrigin = await getRemoteOriginUrl();

    config.internal.remoteOrigin = remoteOrigin;
  } catch (e) {
    warn('build', `The remote origin url of this repo isn't found.`);
  }

  spinner.setContent({ text: 'Starting server...' });

  await webpackStart(config);

  spinner.stop();
}

module.exports = start;
