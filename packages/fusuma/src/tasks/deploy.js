'use strict';

const { join } = require('path');
const loader = require('../cli/loader');
const ghpages = require('gh-pages');

async function deploy(basePath, options) {
  return new Promise((resolve, reject) => {
    const spinner = loader('Publishing to gh-pages...').start();

    ghpages.publish(join(basePath, 'dist'), options, (err) => {
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
