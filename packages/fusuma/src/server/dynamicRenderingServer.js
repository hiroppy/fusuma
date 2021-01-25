'use strict';

const { unlink, writeFile } = require('fs').promises;
const { join } = require('path');
const puppeteer = require('puppeteer');
const { error } = require('../cli/log');
const fileServer = require('./fileServer');

async function dynamicRenderingServer(outputDirPath, publicPath, spinner, isThumbnail = true) {
  spinner.setContent({ color: 'cyan', text: 'Rendering components to HTML...' });

  const port = 5445;
  const browser = await puppeteer.launch({
    chromeWebSecurity: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  const app = await fileServer(outputDirPath, publicPath, port);

  // https://www.kapwing.com/resources/what-is-an-og-image-make-and-format-og-images-for-your-blog-or-webpage/
  await page.setViewport({
    width: 1200,
    height: 630,
  });
  await page.goto(`http://localhost:${port}?sidebar=false&ssr=true`, {
    waitUntil: ['load', 'networkidle2'],
  });

  const htmlPath = join(outputDirPath, 'index.html');

  try {
    await unlink(htmlPath);
    await writeFile(htmlPath, await page.content());
  } catch (e) {
    error('build', 'dist/index.html not found');
  }

  if (isThumbnail) {
    spinner.setContent({ color: 'yellow', text: 'Generating og image...' });

    const outputFilePath = join(outputDirPath, 'thumbnail.png');

    await page.screenshot({ path: outputFilePath });
  }

  await page.close();
  await browser.close();
  app.close();
}

module.exports = dynamicRenderingServer;
