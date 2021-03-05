'use strict';

const Spinner = require('../cli/Spinner');
const { warn } = require('../cli/log');
const deleteDir = require('../utils/deleteDir');
const getRemoteOriginUrl = require('../utils/getRemoteOriginUrl');
const buildLogs = require('../utils/buildLogs');
const { build: webpackBuild } = require('../webpack');
const outputBuildInfo = require('../webpack/getChunks');
const dynamicRenderingServer = require('../server/dynamicRenderingServer');

async function build(config, isConsoleOutput = true) {
  process.env.NODE_ENV = 'production';

  const spinner = new Spinner();
  const { outputDirPath } = config.internal;

  try {
    spinner.setContent({ color: 'green', text: 'Fetching the remote origin url...' });
    spinner.start();
    const remoteOrigin = await getRemoteOriginUrl();

    config.internal.remoteOrigin = remoteOrigin;
  } catch (e) {
    warn('build', `The remote origin url of this repo isn't found.`);
  }

  await deleteDir(outputDirPath);

  spinner.setContent({ color: 'cyan', text: 'Building with webpack...' });

  const stats = await webpackBuild(config);

  let neededThumbnail = false;

  if (!config.meta.thumbnail) {
    if (config.meta.url) {
      neededThumbnail = true;
    } else {
      warn('build', 'If you want to generate og:image, please set fusumarc.meta.url');
    }
  }

  const logs = await dynamicRenderingServer(
    outputDirPath,
    config.build.publicPath,
    spinner,
    neededThumbnail
  );

  spinner.stop();

  if (isConsoleOutput) {
    const chunks = outputBuildInfo(stats);

    buildLogs({ ...logs, ...chunks });
  }
}

module.exports = build;
