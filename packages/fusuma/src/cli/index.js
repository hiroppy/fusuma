#!/usr/bin/env node

'use strict';

const prog = require('caporal');
const { version } = require('../../package.json');
const tasks = require('../tasks');

async function cli() {
  return new Promise((resolve) => {
    prog
      .version(version)
      .description('CLI for easily make slides with Markdown')
      .command('init', 'Create a configure file')
      .option('-b <directory>', 'A base path', prog.STRING, process.cwd())
      .action((args, options) => {
        resolve({
          type: 'init',
          options: {
            basePath: options.b,
          },
        });
      })

      .command('start', 'Start with webpack-dev-server')
      .option('-b <directory>', 'A base path', prog.STRING, process.cwd())
      .option('-i <directory>', 'A directory to load', prog.STRING, 'slides')
      .option('-p <port>', 'Dev server port', prog.INT, '8080')
      .action((args, options) => {
        resolve({
          type: 'start',
          options: {
            basePath: options.b,
            inputDir: options.i,
            port: options.p,
          },
        });
      })

      .command('start-prod', 'Serve bundle directory')
      .option('-b <directory>', 'A base path', prog.STRING, process.cwd())
      .option('-i <directory>', 'A directory to load', prog.STRING, 'dist')
      .option('-p <port>', 'Dev server port', prog.INT, '8080')
      .action((args, options) => {
        resolve({
          type: 'startProd',
          options: {
            basePath: options.b,
            inputDir: options.i,
            port: options.p,
          },
        });
      })

      .command('build', 'Build with webpack')
      .option('-b <directory>', 'A base path', prog.STRING, process.cwd())
      .option('-i <directory>', 'A directory to load', prog.STRING, 'slides')
      .option('-o <directory>', 'A directory to output', prog.STRING, 'dist')
      .action((args, options) => {
        resolve({
          type: 'build',
          options: {
            basePath: options.b,
            inputDir: options.i,
            outputDir: options.o,
          },
        });
      })

      .command('deploy', 'Deploy to GitHub pages')
      .option('-b <directory>', 'A base path', prog.STRING, process.cwd())
      .option('-i <directory>', 'A directory to load', prog.STRING, 'dist')
      .action((args, options) => {
        resolve({
          type: 'deploy',
          options: {
            basePath: options.b,
            outputDir: options.i,
          },
        });
      })

      .command('pdf', 'Export as PDF')
      .option('-b <directory>', 'A base path', prog.STRING, process.cwd())
      .option('-i <directory>', 'A directory to load', prog.STRING, 'dist')
      .option('-f <directory>', 'A filename of pdf', prog.STRING, 'slide.pdf')
      .action((args, options) => {
        resolve({
          type: 'pdf',
          options: {
            basePath: options.b,
            inputDir: options.i,
            filename: options.f,
          },
        });
      });

    prog.parse(process.argv);
  });
}

(async () => {
  const res = await cli();

  tasks(res);
})();

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});
