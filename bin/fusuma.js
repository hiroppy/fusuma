#!/usr/bin/env node

const { join } = require('path');
const ora = require('ora');
const rmfr = require('rmfr');
const prog = require('caporal');
const { init, read } = require('../src/configs/fusumarc');
const { start, build } = require('../src');
const { version } = require('../package.json');

prog
  .version(version)
  .command('start', 'Start with webpack-dev-server')
  .action(async (args, options, logger) => {
    const spinner = ora('Starting with webpack-dev-server').start();
    const config = await read(process.cwd());

    start(config, () => {
      spinner.stop();
    });
  })
  .command('build', 'Build with webpack')
  // .option('-d <dir>', 'Delete ./dist')
  .action(async (args, options, logger) => {
    const spinner = ora('Building with webpack').start();
    const config = await read(process.cwd());

    await rmfr(join(process.cwd(), 'dist'));
    await build(config);
    spinner.stop();
  })
  .command('init', 'Create a configure file')
  .action(async (args, options, logger) => {
    console.log('Create new configure file');
    await init(process.cwd());
  })
  .command('deploy', 'Deploy to GitHub pages')
  .action((args, options, logger) => {
    console.log('TODO');
  });

prog.parse(process.argv);
