'use strict';

const chalk = require('chalk');
const humanSize = require('human-size');

function outputBuildInfo(res) {
  let totalSize = 0;

  const assets = Object.entries(res.compilation.assets).map(([name, asset]) => {
    const size = asset.size();

    totalSize += size;

    return {
      name,
      size,
    };
  });

  assets.sort((a, b) => {
    return b.size - a.size;
  });

  assets.forEach(({ name, size }) => {
    let filename = name;
    const fileSize = chalk.greenBright(humanSize(size));

    if (name.includes('.js')) {
      if (assets.some(({ name }) => name === `${filename}.gz`) || name.includes('.LICENSE')) {
        filename = chalk.gray(name);
      } else {
        filename = chalk.yellow(name);
      }
    } else if (name.includes('.css')) {
      if (assets.some(({ name }) => name === `${filename}.gz`)) {
        filename = chalk.gray(name);
      } else {
        filename = chalk.blue(name);
      }
    } else if (name.includes('.html')) {
      filename = chalk.redBright(name);
    } else if (name.includes('.webp')) {
      filename = chalk.magenta(name);
    }

    console.log(filename, fileSize);
  });

  console.log();
  console.log('Total:', chalk.greenBright(humanSize(totalSize)));
}

module.exports = outputBuildInfo;
