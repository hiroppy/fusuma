'use strict';

const { join } = require('path');
const loader = require('../cli/loader');

async function deploy(config) {
  const ghpages = require('gh-pages');

  return new Promise((resolve, reject) => {
    const spinner = loader('Publishing to gh-pages...').start();
    const { basePath, outputDir } = config.internal;
    const outputDirPath = join(basePath, outputDir);

    ghpages.publish(outputDirPath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }

      spinner.stop();
      console.info('Published!');
    });
  });
}

module.exports = deploy;
