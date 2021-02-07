'use strict';

const { unlink, writeFile } = require('fs').promises;
const { join } = require('path');
const chalk = require('chalk');
const puppeteer = require('puppeteer');
const pa11y = require('pa11y');
const { warn, error } = require('../cli/log');
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
  const url = `http://localhost:${port}?sidebar=false&pagination=false&ssr=true`;
  const htmlPath = join(outputDirPath, 'index.html');

  // https://www.kapwing.com/resources/what-is-an-og-image-make-and-format-og-images-for-your-blog-or-webpage/
  await page.setViewport({
    width: 1200,
    height: 630,
  });
  await page.goto(url, {
    waitUntil: ['load', 'networkidle2'],
  });

  try {
    await unlink(htmlPath);
    await writeFile(htmlPath, await page.content());
  } catch (e) {
    error('build', 'dist/index.html not found');
  }

  if (isThumbnail) {
    spinner.setContent({ color: 'yellow', text: 'Generating og image...' });
    await page.screenshot({ path: join(outputDirPath, 'thumbnail.png') });
  }

  spinner.setContent({ color: 'green', text: 'checking a11y...' });

  const { issues } = await pa11y(url, {
    browser,
    ignore: [/* anchor in ToC*/ 'WCAG2AA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID'],
  });

  if (issues.length) {
    spinner.stop();

    const filteredIssues = issues.filter(({ selector }) => {
      return !selector.includes('> code');
    });

    if (filteredIssues.length) {
      warn('build', `a11y: ${filteredIssues.length} issues`);
      filteredIssues.forEach(({ message, context, selector }) => {
        console.log('-', chalk.red(message));
        console.log(' ', context);
        console.log(' ', chalk.green(selector));
      });
      console.log();
    }
  }

  await page.close();
  await browser.close();
  app.close();
}

module.exports = dynamicRenderingServer;
