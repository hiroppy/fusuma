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
      .option('-t [type]', 'Schema type', prog.STRING)
      .action((args, options) => {
        resolve({
          type: 'init',
          options: {
            basePath: options.b,
            schema: options.t,
          },
        });
      })

      .command('start', 'Start with webpack-dev-server')
      .option('-b <directory>', 'A base path', prog.STRING, process.cwd())
      .option('-i <directory>', 'A directory to load', prog.STRING, 'slides')
      .option('-p <port>', 'Dev server port', prog.INT, '8080')
      .option('-f <fileMode>', 'A serve for a bundled directory', prog.BOOLEAN, false)
      .action((args, options) => {
        resolve({
          type: 'start',
          options: {
            basePath: options.b,
            inputDir: options.i,
            port: options.p,
            isFileServer: options.f,
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

    // TODO: refactor
    // .command('live', 'Start live mode')
    // .option('-i <interval>', 'Set interval time(ms)', prog.INT, 6000)
    // .option('-w <keyword>', 'Specified searched keyword')
    // .option('-p <port>', 'Server port', prog.INT, 3000)
    // .action((args, options, logger) => {
    //   resolve({
    //     type: 'live',
    //     options: {
    //       outputDir: options.d,
    //       port: options.p,
    //       keyword: options.w,
    //       interval: options.i,
    //     },
    //   });
    // });

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
