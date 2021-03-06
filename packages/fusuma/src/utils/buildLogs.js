'use strict';

const { table, getBorderCharacters } = require('table');
const chalk = require('chalk');
const prettyBytes = require('pretty-bytes');

const tableConfig = {
  border: getBorderCharacters('void'),
  columnDefault: {
    paddingLeft: 0,
    paddingRight: 1,
  },
  columns: {
    3: {
      alignment: 'right',
      paddingLeft: 1,
    },
  },
  drawHorizontalLine: () => false,
};

function buildLogs(logs, publicPath) {
  const outputStack = [];
  const syncChunk = chalk.yellow('○');
  const asyncChunk = chalk.cyan('○');

  {
    const outputStack = [];
    const tti = logs.performance.domInteractive - logs.performance.navigationStart;
    outputStack.push(['TTI  (Time to Interactive)', `${chalk.yellow(tti)} ms`]);
    const ttfb = logs.performance.responseStart - logs.performance.requestStart;
    outputStack.push(['TTFB (Time to First Byte)', `${chalk.yellow(ttfb)} ms`]);
    const ttlb = logs.performance.responseEnd - logs.performance.requestStart;
    outputStack.push(['TTLB (Time to Last Byte)', `${chalk.yellow(ttlb)} ms`]);
    console.log(table(outputStack, tableConfig));
  }

  // header
  outputStack.push(['', '', 'size', 'gzip']);
  outputStack.push([
    `  ┌─`,
    `${syncChunk} ${publicPath}`,
    chalk.green(prettyBytes(logs.assets['index.html'].size)),
    '',
  ]);
  outputStack.push(['  │', '', '', '']);

  let runtimeFileNum = 0;
  let runtimeGzipFileNum = 0;
  const assetsTree = {};

  for (const asset of logs.network) {
    // html, external assets
    if (asset.includes('http')) {
      // assetsTree['network'] = {};
    } else {
      const name = asset.split('.')[0];

      runtimeFileNum++;

      // assets
      if (!asset.includes('.js') && !asset.includes('.css')) {
        if (!assetsTree['assets']) {
          assetsTree['assets'] = {
            size: 0,
            gzSize: 0,
            files: {},
          };
        }

        assetsTree['assets'].files[asset] = {
          gzSize: 0,
          ...logs.assets[asset],
          isAsync: false,
        };
        assetsTree['assets'].size += logs.assets[asset].size;

        const gz = logs.assets[`${asset}.gz`];

        if (gz) {
          assetsTree['assets'].gzSize += gz.size;
          runtimeGzipFileNum++;
        }
      } else {
        if (!Number(name)) {
          // initial
          if (!assetsTree[name]) {
            assetsTree[name] = {
              size: 0,
              gzSize: 0,
              files: {},
            };
          }

          for (const file of logs.chunks[name].files) {
            if (!assetsTree[name].files[file]) {
              const info = logs.assets[file];
              const gz = logs.assets[`${file}.gz`];

              assetsTree[name].files[file] = {
                ...info,
                isAsync: false,
              };

              assetsTree[name].size += info.size;

              if (gz) {
                runtimeGzipFileNum++;
                assetsTree[name].files[file].gzSize = gz.size;
                assetsTree[name].gzSize += gz.size;
              }
            }
          }
        } else {
          // async
          for (const file of logs.chunks[name].files) {
            const info = logs.assets[file];
            const gz = logs.assets[`${file}.gz`];

            assetsTree['runtime'].files[file] = {
              ...info,
              isAsync: true,
            };
            assetsTree['runtime'].size += info.size;
            if (gz) {
              runtimeGzipFileNum++;
              assetsTree['runtime'].files[file].gzSize = gz.size;
              assetsTree['runtime'].gzSize += gz.size;
            }
          }
        }
      }
    }
  }

  const topFieldNum = Object.keys(assetsTree).length;
  let runtimeFileSize = 0;
  let runtimeGzipFileSize = 0;

  Object.entries(assetsTree).forEach(([initialName, initialValue], topIndex) => {
    runtimeFileSize += initialValue.size;
    runtimeGzipFileSize += initialValue.gzSize;

    outputStack.push([
      topFieldNum - 1 !== topIndex ? '  ├─' : '  └─',
      `[${initialName}]`,
      chalk.green(prettyBytes(initialValue.size)),
      initialValue.gzSize !== 0 ? chalk.yellow(prettyBytes(initialValue.gzSize)) : '',
    ]);

    Object.entries(initialValue.files).forEach(([name, { size, gzSize, isAsync }], index) => {
      outputStack.push([
        topFieldNum - 1 > topIndex ? '  │' : '',
        `${Object.keys(initialValue.files).length - 1 !== index ? '├─' : '└─'} ${
          isAsync ? asyncChunk : syncChunk
        } ${name}`,
        chalk.blue(prettyBytes(size)),
        gzSize ? chalk.blue(prettyBytes(gzSize)) : '',
      ]);
    });

    if (topFieldNum - 1 !== topIndex) {
      outputStack.push(['  │', '', '', '']);
    }
  });

  console.log(table(outputStack, tableConfig));
  console.log(`${syncChunk} initial  ${asyncChunk} async`);
  console.log();

  {
    const outputStack = [];

    outputStack.push([
      'runtime file size totals',
      chalk.green(prettyBytes(runtimeFileSize)),
      `(${runtimeFileNum} files)`,
      chalk.yellow(prettyBytes(runtimeGzipFileSize)),
      `(${runtimeGzipFileNum} files)`,
    ]);
    outputStack.push([
      'file size totals',
      chalk.green(prettyBytes(logs.size.total)),
      `(${logs.num.total} files)`,
      chalk.yellow(prettyBytes(logs.size.gz)),
      `(${logs.num.gz} files)`,
    ]);

    console.log(table(outputStack, tableConfig));
  }
}

module.exports = buildLogs;
