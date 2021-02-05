'use strict';

const chalk = require('chalk');
const prettyBytes = require('pretty-bytes');

function outputBuildInfo(res) {
  let gzFilesNum = 0;
  let totalSize = 0;
  let maxStringSize = 0;
  let hiddenFilesNum = 0;
  const outputStack = [];

  const assets = Object.entries(res.compilation.assets).map(([name, asset]) => {
    const size = asset.size();

    totalSize += size;

    if (maxStringSize < name.length) {
      maxStringSize = name.length;
    }

    return {
      name,
      size,
    };
  });

  assets.sort((a, b) => b.size - a.size);

  assets.forEach(({ name, size }) => {
    let filename = name;
    const fileSize = chalk.greenBright(prettyBytes(size));

    if (name.includes('.gz')) {
      gzFilesNum++;
    }

    if (size <= 4000) {
      hiddenFilesNum++;
      return;
    }

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
    } else if (name.includes('.ttf')) {
      filename = chalk.redBright(name);
    } else if (name.includes('.webp')) {
      filename = chalk.magenta(name);
    }

    outputStack.push(`${filename} ${' '.repeat(maxStringSize - name.length)}${fileSize}`);
  });

  outputStack.push(`  + ${hiddenFilesNum} hidden files`);
  outputStack.push('');
  outputStack.push(
    chalk.white(
      `Total ${assets.length} files (gzip: ${gzFilesNum} files) - ${chalk.greenBright(
        prettyBytes(totalSize)
      )}`
    )
  );

  return outputStack;
}

module.exports = outputBuildInfo;
