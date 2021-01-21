'use strict';

const Spinner = require('../cli/Spinner');
const { info } = require('../cli/log');

async function deploy(config, options = {}) {
  const ghpages = require('gh-pages');

  return new Promise((resolve, reject) => {
    const spinner = new Spinner();
    const { outputDirPath } = config.internal;

    spinner.setContent({ color: 'yellow', text: 'Publishing to gh-pages...' });
    spinner.start();

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
