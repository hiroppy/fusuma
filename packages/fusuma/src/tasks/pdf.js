'use strict';

const { join } = require('path');
const Spinner = require('../cli/Spinner');
const lazyloadModule = require('../utils/lazyloadModule');

async function pdf(config) {
  if (config.slide.loop) {
    console.error('You must disable slide.loop.');
    process.exit(1);
  }

  const port = 3455;
  const { basePath, inputDirPath, filename } = config.internal;
  const output = join(basePath, filename);
  const spinner = new Spinner();

  spinner.setContent({ text: 'Exporting as PDF...' });
  spinner.start();

  try {
    const pack = process.env.FUSUMA_DEBUG
      ? join(__dirname, '../../../task-pdf')
      : '@fusuma/task-pdf';
    const pdf = await lazyloadModule(pack, (type) => {
      if (type === 'fallback') {
        spinner.setContent({ color: 'yellow', text: `Installing ${pack}...` });
      }
    });

    await pdf(inputDirPath, output, port);

    spinner.stop();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

module.exports = pdf;
