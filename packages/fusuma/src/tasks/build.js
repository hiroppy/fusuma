'use strict';

const { join } = require('path');
const loader = require('../cli/loader');
const fusuma = require('../configs/fusumarc');
const getRemoteOriginUrl = require('../utils/getRemoteOriginUrl');
const { build: webpackBuild } = require('../webpack');
const deleteDir = require('../utils/deleteDir');

async function createOgImage(basePath) {
  const url = require('url');
  const { join } = require('path');
  const puppeteer = require('puppeteer');

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const distPath = join(basePath, 'dist');
  const outputPath = join(distPath, 'thumbnail.png');

  // https://www.kapwing.com/resources/what-is-an-og-image-make-and-format-og-images-for-your-blog-or-webpage/
  await page.setViewport({
    width: 1200,
    height: 630,
  });
  await page.goto(url.pathToFileURL(join(distPath, 'index.html')), { waitUntil: 'networkidle2' });
  await page.screenshot({ path: outputPath });
  await browser.close();

  return outputPath;
}

// async function injectOgImage() {}

async function build(basePath, extendedConfig = {}, isConsoleOutput = true) {
  const spinner = loader('Rendering components to HTML...').start();
  const config = fusuma.combine(await fusuma.read(basePath), extendedConfig);
  const remoteOrigin = await getRemoteOriginUrl();

  if (process.env.NODE_ENV === undefined) process.env.NODE_ENV = 'production';

  await deleteDir(join(basePath, 'dist'));
  await webpackBuild(
    {
      ...config,
      internal: {
        basePath,
        remoteOrigin,
      },
    },
    isConsoleOutput,
    (type) => {
      if (type == 'start-build') {
        spinner.color = 'yellow';
        spinner.text = 'Building with webpack...';
      }
    }
  );

  // TODO: fix
  if (!config.meta.thumbnail) {
    await createOgImage(basePath);
  }

  spinner.stop();
}

module.exports = build;
