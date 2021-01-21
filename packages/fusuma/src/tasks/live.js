'use strict';

const { join } = require('path');
const Spinner = require('../cli/Spinner');
const lazyloadModule = require('../utils/lazyloadModule');

async function live(config) {
  const { keyword, port, dir } = config.internal;
  const spinner = new Spinner();

  // await buildProcess(
  //   basePath,
  //   {
  //     server: {
  //       port,
  //       isLive: true,
  //       keyword,
  //     },
  //   },
  //   false
  // );

  spinner.setContent({ color: 'green', text: 'Setup live mode...' });
  spinner.start();

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
      // internal,
      keyword,
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

module.exports = live;
