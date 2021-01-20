'use strict';

const loader = require('../cli/loader');
const { info } = require('../cli/log');

async function deploy(config, options = {}) {
  const ghpages = require('gh-pages');

  return new Promise((resolve, reject) => {
    const spinner = loader('Publishing to gh-pages...').start();
    const { basePath, outputDirPath } = config.internal;

    ghpages.publish(outputDirPath, options, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }

      spinner.stop();
      info('deploy', 'Published!');
    });
  });
}

module.exports = deploy;
