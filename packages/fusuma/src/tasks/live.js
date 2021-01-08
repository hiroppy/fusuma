'use strict';

const { join } = require('path');
const loader = require('../cli/loader');
const lazyloadModule = require('../utils/lazyloadModule');

async function live(config) {
  const { basePath, outputDir, keyword, port, dir } = config.internal;

  await buildProcess(
    basePath,
    {
      server: {
        port,
        isLive: true,
        keyword,
      },
    },
    false
  );

  const spinner = loader('Setup live mode...').start();

  try {
    const pack = process.env.FUSUMA_DEBUG
      ? join(__dirname, '../../../task-live')
      : '@fusuma/task-live';
    const liveServer = await lazyloadModule(pack, (type) => {
      if (type === 'fallback') {
        spinner.color = 'yellow';
        spinner.text = `Installing ${pack}`;
      }
    });

    spinner.stop();

    liveServer({
      dir,
      port,
      internal,
      keyword,
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

module.exports = live;
