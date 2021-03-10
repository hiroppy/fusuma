'use strict';

const { version } = require('../../package.json');
const Spinner = require('../cli/Spinner');
const { info } = require('../cli/log');
const lazyloadModule = require('../utils/lazyloadModule');

console.log(version);

async function pdf(config) {
  const port = 3455;
  const { basePath, inputDirPath, filename } = config.internal;
  const { publicPath } = config.build;
  const spinner = new Spinner();

  spinner.setContent({ text: 'Exporting as PDF...' });
  spinner.start();

  try {
    const pack = '@fusuma/task-pdf';
    const pdf = await lazyloadModule(pack, (type) => {
      if (type === 'fallback') {
        spinner.setContent({ color: 'yellow', text: `Installing ${pack}...` });
      }
    });

    await pdf(inputDirPath, publicPath, basePath, filename, port);

    spinner.stop();
    info('pdf', `Generated ${filename}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

module.exports = pdf;
