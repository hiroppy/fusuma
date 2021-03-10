'use strict';

const { join, dirname } = require('path');
const globby = require('globby');
const { version } = require('../../package.json');
const Spinner = require('../cli/Spinner');
const { info, warn } = require('../cli/log');
const lazyloadModule = require('../utils/lazyloadModule');
const build = require('../portal/build');

async function portal(config) {
  // TODO: validation
  // check directory and products have .fusumarc or not

  const spinner = new Spinner();

  spinner.setContent({ text: 'Portal...' });
  spinner.start();

  const { portal, internal } = config;
  let scopedSlides = [];

  console.log(internal);

  try {
    const packages = await globby(join(internal.inputDirPath, '**', '.fusumarc.yml'));

    if (packages.length === 0) {
      warn('portal', 'not found scoped slides');
      process.exit(1);
    }

    scopedSlides = packages.map((path) => dirname(path));

    console.log(scopedSlides);

    // const pack = process.env.FUSUMA_DEBUG
    //   ? join(__dirname, '../../../task-portal')
    //   : `@fusuma/task-portal@${version}`;
    // const portalTask = await lazyloadModule(pack, (type) => {
    //   if (type === 'fallback') {
    //     spinner.setContent({ color: 'yellow', text: `Installing ${pack}...` });
    //   }
    // });

    build();

    spinner.stop();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

module.exports = portal;
