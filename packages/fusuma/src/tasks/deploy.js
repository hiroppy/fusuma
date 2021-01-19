'use strict';

const loader = require('../cli/loader');

async function deploy(config) {
  const ghpages = require('gh-pages');

  return new Promise((resolve, reject) => {
    const spinner = loader('Publishing to gh-pages...').start();
    const { basePath, outputDirPath } = config.internal;

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
