'use strict';

const { join } = require('path');
const loader = require('../cli/loader');
const getRemoteOriginUrl = require('../utils/getRemoteOriginUrl');
const { build: webpackBuild } = require('../webpack');
const deleteDir = require('../utils/deleteDir');
const fileServer = require('../utils/fileServer');

async function createOgImage(outputDirPath) {
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
  const app = await fileServer(outputDirPath, port);
  await page.goto(`http://localhost:${port}`, {
    waitUntil: ['load', 'networkidle2'],
  });
  await page.screenshot({ path: outputFilePath });
  await page.close();
  await browser.close();
  app.close();

  return outputFilePath;
}

async function build(config, isConsoleOutput = true) {
  const spinner = loader('Rendering components to HTML...').start();
  const { outputDirPath } = config.internal;
  const remoteOrigin = await getRemoteOriginUrl();

  if (process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = 'production';
  }

  await deleteDir(outputDirPath);
  await webpackBuild(config, isConsoleOutput, (type) => {
    if (type == 'start-build') {
      spinner.color = 'yellow';
      spinner.text = 'Building with webpack...';
    }
  });

  if (!config.meta.thumbnail && config.meta.url) {
    spinner.text = 'Generating og:image...';
    await createOgImage(outputDirPath);
  }

  spinner.stop();
  console.info('completed!');
}

module.exports = build;
