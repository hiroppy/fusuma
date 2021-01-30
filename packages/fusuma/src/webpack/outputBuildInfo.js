'use strict';

const chalk = require('chalk');
const prettyBytes = require('pretty-bytes');

function outputBuildInfo(res) {
  let gzFilesNum = 0;
  let totalSize = 0;
  let maxStringSize = 0;

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

  assets.sort((a, b) => {
    return b.size - a.size;
  });

  assets.forEach(({ name, size }) => {
    let filename = name;
    const fileSize = chalk.greenBright(prettyBytes(size));

    if (name.includes('.gz')) {
      gzFilesNum++;
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
    } else if (name.includes('.html')) {
      filename = chalk.redBright(name);
    } else if (name.includes('.webp')) {
      filename = chalk.magenta(name);
    }

    console.log(`${filename} ${' '.repeat(maxStringSize - name.length)}${fileSize}`);
  });

  console.log();
  console.log(
    `Total ${assets.length} files (gzip: ${gzFilesNum}) -`,
    chalk.greenBright(prettyBytes(totalSize))
  );
}

module.exports = outputBuildInfo;
