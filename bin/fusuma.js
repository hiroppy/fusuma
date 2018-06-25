#!/usr/bin/env node

const prog = require('caporal');
const taskProcess = require('./task-process');
const { version } = require('../package.json');

prog
  .version(version)
  .description('CLI for easily make slides with markdown')

  .command('init', 'Create a configure file')
  .action(async (args, options, logger) => {
    await taskProcess('init');
  })

  .command('start', 'Start with webpack-serve')
  .option('-d <directory>', 'Directory to load')
  .action(async (args, options, logger) => {
    await taskProcess('start', { dir: options.d });
  })

  .command('build', 'Build with webpack')
  .option('-d <directory>', 'Directory to load')
  .action(async (args, options, logger) => {
    await taskProcess('build', { dir: options.d });
  })

  .command('deploy', 'Deploy to GitHub pages')
  .option('-d <directory>', 'Directory to load')
  .action(async (args, options, logger) => {
    await taskProcess('deploy', { dir: options.d });
  })

  .command('pdf', 'Export as PDF')
  .option('-i <input>', 'Specified Directory')
  .option('-o <output>', 'Specified Filename')
  .action(async (args, options, logger) => {
    await taskProcess('pdf', {
      input: options.i,
      output: options.o
    });
  });

prog.parse(process.argv);

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});
