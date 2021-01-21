'use strict';

const { join } = require('path');
const Spinner = require('../cli/Spinner');
const { info, warn } = require('../cli/log');
const getRemoteOriginUrl = require('../utils/getRemoteOriginUrl');
const { build: webpackBuild } = require('../webpack');
const deleteDir = require('../utils/deleteDir');
const fileServer = require('../server/fileServer');

async function createOgImage(outputDirPath, publicPath) {
  const puppeteer = require('puppeteer');

  const port = 5445;
  const browser = await puppeteer.launch({
    chromeWebSecurity: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  const outputFilePath = join(outputDirPath, 'thumbnail.png');

  // https://www.kapwing.com/resources/what-is-an-og-image-make-and-format-og-images-for-your-blog-or-webpage/
  await page.setViewport({
    width: 1200,
    height: 630,
  });
  const app = await fileServer(outputDirPath, publicPath, port);
  await page.goto(`http://localhost:${port}?sidebar=false`, {
    waitUntil: ['load', 'networkidle2'],
  });
  await page.screenshot({ path: outputFilePath });
  await page.close();
  await browser.close();
  app.close();

  return outputFilePath;
}

async function build(config, isConsoleOutput = true) {
  if (process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = 'production';
  }

  const spinner = new Spinner();
  const { outputDirPath } = config.internal;

  try {
    spinner.setContent({ color: 'green', text: 'Fetching the remote origin url...' });
    spinner.start();
    const remoteOrigin = await getRemoteOriginUrl();

    config.internal.remoteOrigin = remoteOrigin;
  } catch (e) {
    warn('build', `The remote origin url of this repo isn't found.`);
  }

  // TODO: investigate webslide error
  config.build.useCache = false;

  await deleteDir(outputDirPath);
  await webpackBuild(config, isConsoleOutput, (type) => {
    if (type === 'start-ssr') {
      spinner.setContent({ color: 'cyan', text: 'Rendering components to HTML...' });
    }
    if (type == 'start-build') {
      spinner.setContent({ color: 'yellow', text: 'Building with webpack...' });
    }
  });

  if (!config.meta.thumbnail) {
    if (config.meta.url) {
      spinner.setContent({ color: 'green', text: 'Generating og:image...' });
      await createOgImage(outputDirPath, config.build.publicPath);
    } else {
      warn('build', 'If you want to generate og:image, please set fusumarc.meta.url');
    }
  }

  spinner.stop();
  info('build', 'Completed!');
}

module.exports = build;
