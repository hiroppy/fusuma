'use strict';

const { join } = require('path');
const loader = require('../cli/loader');
const lazyloadModule = require('../utils/lazyloadModule');
const build = require('./build');

async function pdf(basePath, { input: i, output: o }) {
  const port = 3455;
  const input = join(process.cwd(), i || 'dist');
  const output = join(process.cwd(), o || 'slide.pdf');

  await build(
    basePath,
    {
      slide: {
        loop: false,
        sidebar: false,
      },
    },
    false
  );

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

    await pdf(input, output, port);

    spinner.stop();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

module.exports = pdf;
