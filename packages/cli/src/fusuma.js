#!/usr/bin/env node

'use strict';

const prog = require('caporal');
const { version } = require('../package.json');

async function cli() {
  return new Promise((resolve) => {
    prog
      .version(version)
      .description('CLI for easily make slides with Markdown')

      .command('init', 'Create a configure file')
      .option('-s [type]', 'Specified schema type')
      .action((args, options, logger) => {
        resolve({
          type: 'init',
          options: {
            schema: options.s
          }
        });
      })

      .command('start', 'Start with webpack-dev-server')
      .option('-d <directory>', 'Directory to load')
      .option('-p <port>', 'Dev server port')
      .action((args, options, logger) => {
        resolve({
          type: 'start',
          options: { dir: options.d, port: options.p }
        });
      })

      .command('build', 'Build with webpack')
      .option('-d <directory>', 'Directory to load')
      .action((args, options, logger) => {
        resolve({
          type: 'build',
          options: { dir: options.d }
        });
      })

      .command('deploy', 'Deploy to GitHub pages')
      .option('-d <directory>', 'Directory to load')
      .action((args, options, logger) => {
        resolve({
          type: 'deploy',
          options: { dir: options.d }
        });
      })

      .command('pdf', 'Export as PDF')
      .option('-i <input>', 'Specified Directory')
      .option('-o <output>', 'Specified Filename')
      .action((args, options, logger) => {
        resolve({
          type: 'pdf',
          options: {
            input: options.i,
            output: options.o
          }
        });
      })

      .command('live', 'Start live mode')
      .option('-i <interval>', 'Set interval time(ms)', prog.INT, 6000)
      .option('-w <keyword>', 'Specified searched keyword')
      .option('-p <port>', 'Server port', prog.INT, 3000)
      .action((args, options, logger) => {
        resolve({
          type: 'live',
          options: {
            dir: options.d,
            port: options.p,
            keyword: options.w,
            interval: options.i
          }
        });
      });

    prog.parse(process.argv);
  });
}

module.exports = cli;
