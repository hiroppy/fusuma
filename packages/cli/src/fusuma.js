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
      .action((args, options, logger) => {
        resolve({
          type: 'init',
          options: {}
        });
      })

      .command('start', 'Start with webpack-dev-server')
      .option('-d <directory>', 'Directory to load')
      .action((args, options, logger) => {
        resolve({
          type: 'start',
          options: { dir: options.d }
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
      .action(async (args, options, logger) => {
        resolve({
          type: 'deploy',
          options: { dir: options.d }
        });
      })

      .command('pdf', 'Export as PDF')
      .option('-i <input>', 'Specified Directory')
      .option('-o <output>', 'Specified Filename')
      .action(async (args, options, logger) => {
        resolve({
          type: 'pdf',
          options: {
            input: options.i,
            output: options.o
          }
        });
      });

    prog.parse(process.argv);
  });
}

module.exports = cli;
