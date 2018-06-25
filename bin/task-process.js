'use strict';

const { join } = require('path');
const ora = require('ora');
const rmfr = require('rmfr');
const merge = require('deepmerge');
const remoteOriginUrl = require('remote-origin-url');
const { init, read } = require('../src/configs/fusumarc');
const { start, build, deploy, pdf } = require('../src');

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

async function initProcess() {
  await init(process.cwd());
}

async function startProcess(basePath) {
  const spinner = ora('Starting with webpack-serve').start();
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
}

async function buildProcess(basePath, extendedConfig = {}) {
  const spinner = ora('Building with webpack').start();
  const config = merge(await read(basePath), extendedConfig);
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
}

async function deployProcess(basePath) {
  const spinner = ora('Publishing to gh-pages').start();

  await deploy(join(basePath, 'dist'));

  spinner.stop();
}

async function pdfProcess(basePath, { input: i, output: o }) {
  const port = 3455;
  const input = join(process.cwd(), i || 'dist');
  const output = join(process.cwd(), o || 'slide.pdf');

  await buildProcess(basePath, {
    slide: {
      sidebar: false
    }
  });

  const spinner = ora('Exporting as PDF').start();

  await pdf(input, output, port);

  spinner.stop();
}

function taskProcess(type, obj = {}) {
  const basePath = join(process.cwd(), obj.dir || '');

  switch (type) {
    case 'init':
      return initProcess();
    case 'start':
      return startProcess(basePath);
    case 'build':
      return buildProcess(basePath);
    case 'deploy':
      return deployProcess(basePath);
    case 'pdf':
      return pdfProcess(basePath, obj);
  }
}

module.exports = taskProcess;
