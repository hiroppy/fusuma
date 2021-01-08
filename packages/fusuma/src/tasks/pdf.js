'use strict';

const { join } = require('path');
const loader = require('../cli/loader');
const lazyloadModule = require('../utils/lazyloadModule');

async function pdf(config) {
  if (config.slide.loop) {
    console.error('You must disable slide.loop.');
    process.exit(1);
  }

  const port = 3455;
  const { basePath, inputDir, filename } = config.internal;
  const inputDirPath = join(basePath, inputDir);
  const output = join(basePath, filename);
  const spinner = loader('Exporting as PDF...').start();

  try {
    const pack = process.env.FUSUMA_DEBUG
      ? join(__dirname, '../../../task-pdf')
      : '@fusuma/task-pdf';
    const pdf = await lazyloadModule(pack, (type) => {
      if (type === 'fallback') {
        spinner.color = 'yellow';
        spinner.text = `Installing ${pack}`;
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
