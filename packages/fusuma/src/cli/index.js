#!/usr/bin/env node

'use strict';

const { Command } = require('commander');
const { version } = require('../../package.json');
const tasks = require('../tasks');

const program = new Command();

program.version(version);

program
  .command('init')
  .description('Create a configure file')
  .option('-b <directory>', 'A base path', process.cwd())
  .action((options) => {
    tasks({
      type: 'init',
      options: {
        basePath: options.b,
      },
    });
  });

program
  .command('start')
  .description('Serve dev server')
  .option('-b <directory>', 'A base path', process.cwd())
  .option('-i <directory>', 'A directory to load', 'slides')
  .option('-p <port>', 'Dev server port', 8080)
  .action((options) => {
    tasks({
      type: 'start',
      options: {
        basePath: options.b,
        inputDir: options.i,
        port: options.p,
      },
    });
  });

program
  .command('start-prod')
  .description('Serve bundle directory')
  .option('-b <directory>', 'A base path', process.cwd())
  .option('-i <directory>', 'A directory to load', 'dist')
  .option('-p <port>', 'Dev server port', '8080')
  .action((options) => {
    tasks({
      type: 'startProd',
      options: {
        basePath: options.b,
        inputDir: options.i,
        port: options.p,
      },
    });
  });

program
  .command('build')
  .description('Build with webpack')
  .option('-b <directory>', 'A base path', process.cwd())
  .option('-i <directory>', 'A directory to load', 'slides')
  .option('-o <directory>', 'A directory to output', 'dist')
  .action((options) => {
    tasks({
      type: 'build',
      options: {
        basePath: options.b,
        inputDir: options.i,
        outputDir: options.o,
      },
    });
  });

program
  .command('deploy')
  .description('Deploy to GitHub pages')
  .option('-b <directory>', 'A base path', process.cwd())
  .option('-i <directory>', 'A directory to load', 'dist')
  .action((options) => {
    tasks({
      type: 'deploy',
      options: {
        basePath: options.b,
        outputDir: options.i,
      },
    });
  });

program
  .command('pdf')
  .description('Export as PDF')
  .option('-b <directory>', 'A base path', process.cwd())
  .option('-i <directory>', 'A directory to load', 'dist')
  .option('-f <directory>', 'A filename of pdf', 'slide.pdf')
  .action((options) => {
    tasks({
      type: 'pdf',
      options: {
        basePath: options.b,
        inputDir: options.i,
        filename: options.f,
      },
    });
  });

program.parse(process.argv);

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});
