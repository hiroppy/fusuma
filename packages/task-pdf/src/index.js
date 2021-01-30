'use strict';

const { mkdir } = require('fs').promises;
const { join } = require('path');
const puppeteer = require('puppeteer');
const merge = require('easy-pdf-merge');
const fileServer = require('fusuma/src/server/fileServer');
const deleteDir = require('fusuma/src/utils/deleteDir');

async function pdf(input, publicPath, basePath, filename, port = 3455) {
  const app = await fileServer(input, publicPath, port);
  const browser = await puppeteer.launch({
    args: ['--disable-gpu', '--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });
  const page = await browser.newPage();
  const width = 1024;
  const height = 768;

  await page.goto(`http://localhost:${port}?sidebar=false&pagination=false`, {
    waitUntil: ['load', 'networkidle2'],
  });
  await page.setViewport({
    width,
    height,
  });
  await page.emulateMediaType('screen');

  const tmpOutputPath = join(basePath, '.tmp-output-slide-pdf');
  const slideFilenames = [];
  const totalSlidesNum = await page.evaluate(
    () => Array.from(document.querySelectorAll('.swiper-slide')).length
  );

  await mkdir(tmpOutputPath);

  for (let i = 0; i < totalSlidesNum; i++) {
    const filepath = join(tmpOutputPath, `${i}-${filename}`);
    slideFilenames.push(filepath);

    await page.pdf({
      path: filepath,
      // pageRanges: `${i + 1}-${totalSlidesNum}`,
      printBackground: true,
      width,
      height,
    });
    await page.keyboard.press('ArrowRight');
  }

  await browser.close();
  await new Promise((resolve, reject) => {
    merge(slideFilenames, filename, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
  await deleteDir(tmpOutputPath);

  app.close();
}

module.exports = pdf;
