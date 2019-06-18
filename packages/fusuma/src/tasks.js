'use strict';

const { join } = require('path');
const { loader } = require('@fusuma/cli');
const { deleteDir, getRemoteOriginUrl } = require('@fusuma/utils');
const { fusuma } = require('@fusuma/configs');
const ghp = require('@fusuma/task-ghp');
const init = require('@fusuma/task-init');
const start = require('@fusuma/task-start');
const build = require('@fusuma/task-build');
const merge = require('deepmerge');

async function initProcess() {
  await init(process.cwd());
}

async function startProcess(basePath) {
  const spinner = loader('Starting with webpack-dev-server...').start();
  const config = await fusuma.read(basePath);
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
  const spinner = loader('Building with webpack...').start();
  const config = merge(await fusuma.read(basePath), extendedConfig);
  const remoteOrigin = await getRemoteOriginUrl(basePath);

  await deleteDir(join(basePath, 'dist'));
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
  const spinner = loader('Publishing to gh-pages...').start();

  await ghp(join(basePath, 'dist'));

  spinner.stop();
}

async function pdfProcess(basePath, { input: i, output: o }) {
  const port = 3455;
  const input = join(process.cwd(), i || 'dist');
  const output = join(process.cwd(), o || 'slide.pdf');

  await buildProcess(basePath, {
    slide: {
      loop: false,
      sidebar: false
    }
  });

  const spinner = loader('Exporting as PDF...').start();

  const { execSync } = require('child_process');
  let pdf;

  try {
    pdf = require('@fusuma/task-pdf');
  } catch (e) {
    execSync('npm install @fusuma/task-pdf --no-save', { stdio: 'inherit' });

    pdf = require('@fusuma/task-pdf');
  }

  await pdf(input, output, port);

  spinner.stop();
}

function tasks({ type, options }) {
  const basePath = join(process.cwd(), options.dir || '');

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
      return pdfProcess(basePath, options);
  }
}

module.exports = tasks;
