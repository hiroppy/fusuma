'use strict';

const { join } = require('path');
const loader = require('../cli/loader');
const getRemoteOriginUrl = require('../utils/getRemoteOriginUrl');
const { build: webpackBuild } = require('../webpack');
const deleteDir = require('../utils/deleteDir');

async function createOgImage(outputDirPath) {
  const url = require('url');
  const puppeteer = require('puppeteer');

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const outputPath = join(outputDirPath, 'thumbnail.png');

  // https://www.kapwing.com/resources/what-is-an-og-image-make-and-format-og-images-for-your-blog-or-webpage/
  await page.setViewport({
    width: 1200,
    height: 630,
  });
  await page.goto(url.pathToFileURL(join(outputDirPath, 'index.html')), {
    waitUntil: 'networkidle2',
  });
  await page.screenshot({ path: outputPath });
  await browser.close();

  return outputPath;
}

async function build(config, isConsoleOutput = true) {
  const spinner = loader('Rendering components to HTML...').start();
  const { basePath, outputDir } = config.internal;
  const outputDirPath = join(basePath, outputDir);
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
    await createOgImage(outputDirPath);
  }

  spinner.stop();
  console.info('completed!');
}

module.exports = build;
