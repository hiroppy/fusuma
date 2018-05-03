#!/usr/bin/env node

const { join } = require('path');
const ora = require('ora');
const rmfr = require('rmfr');
const prog = require('caporal');
const { init, read } = require('../src/configs/fusumarc');
const { start, build, deploy } = require('../src');
const { version } = require('../package.json');

prog
  .version(version)
  .description('CLI for easily make slides with markdown')
  .command('start', 'Start with webpack-dev-server')
  .option('-d <directory>', 'Directory to load')
  .action(async (args, options, logger) => {
    const spinner = ora('Starting with webpack-dev-server').start();
    const basePath = join(process.cwd(), options.d || '');
    const config = await read(basePath);

    start(
      {
        ...config,
        internal: {
          basePath
        }
      },
      () => {
        spinner.stop();
      }
    );
  })
  .command('build', 'Build with webpack')
  .option('-d <directory>', 'Directory to load')
  .action(async (args, options, logger) => {
    const spinner = ora('Building with webpack').start();
    const basePath = join(process.cwd(), options.d || '');
    const config = await read(basePath);

    await rmfr(join(basePath, 'dist'));
    await build({
      ...config,
      internal: {
        basePath
      }
    });
    spinner.stop();
  })
  .command('init', 'Create a configure file')
  .action(async (args, options, logger) => {
    console.log('Create new configure file');
    await init(process.cwd());
  })
  .command('deploy', 'Deploy to GitHub pages')
  .action(async (args, options, logger) => {
    const spinner = ora('Publishing to gh-pages').start();
    const basePath = join(process.cwd(), options.d || '');

    await deploy(join(basePath, 'dist'));

    spinner.stop();
  });

prog.parse(process.argv);
