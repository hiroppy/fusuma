#!/usr/bin/env node

const { join } = require('path');
const ora = require('ora');
const rmfr = require('rmfr');
const prog = require('caporal');
const remoteOriginUrl = require('remote-origin-url');
const { init, read } = require('../src/configs/fusumarc');
const { start, build, deploy, pdf } = require('../src');
const { version } = require('../package.json');

function getRemoteOriginUrl(basePath) {
  return new Promise((resolve) => {
    remoteOriginUrl(`${basePath}/.git/config`, (err, url) => {
      if (err) {
        console.error('Could not find github url');
        resolve('');
      } else {
        url = url || '';

        if (url.includes('git@')) resolve(`https://github.com/${url.split(':')[1]}`);
        else resolve(url);
      }
    });
  });
}

prog
  .version(version)
  .description('CLI for easily make slides with markdown')
  .command('start', 'Start with webpack-dev-server')
  .option('-d <directory>', 'Directory to load')
  .action(async (args, options, logger) => {
    const spinner = ora('Starting with webpack-dev-server').start();
    const basePath = join(process.cwd(), options.d || '');
    const config = await read(basePath);
    const remoteOrigin = await getRemoteOriginUrl(basePath);

    start(
      {
        ...config,
        internal: {
          basePath,
          remoteOrigin
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
    const remoteOrigin = await getRemoteOriginUrl(basePath);

    await rmfr(join(basePath, 'dist'));
    await build({
      ...config,
      internal: {
        basePath,
        remoteOrigin
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
  })

  .command('pdf', 'Export as PDF')
  .option('-i <input>', 'Specified URL or Filename')
  .option('-o <output>', 'Specified Filename')
  .action(async (args, options, logger) => {
    if (options.i === undefined) {
      console.log('Require input URL or Filename');
      process.exit(1);
    }

    const spinner = ora('Exporting as PDF').start();

    await pdf(options.i, options.o);

    spinner.stop();
  });

prog.parse(process.argv);

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});
