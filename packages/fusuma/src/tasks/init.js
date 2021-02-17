'use strict';

const { readFile, writeFile, mkdir } = require('fs').promises;
const { join } = require('path');
const { info } = require('../cli/log');

async function init() {
  const baseDir = process.cwd();
  const templatePath = join(__dirname, '../configs/templates');

  await Promise.all([
    mkdir(join(baseDir, 'slides'), { recursive: true }),
    mkdir(join(baseDir, '.github', 'workflows'), { recursive: true }),
  ]);

  await Promise.all([
    writeFile(join(baseDir, '.fusumarc.yml'), await readFile(join(templatePath, 'fusumarc.yml'))),
    writeFile(join(baseDir, 'style.css'), await readFile(join(templatePath, 'style.css'))),
    writeFile(
      join(baseDir, 'slides', '0-slide.md'),
      await readFile(join(templatePath, '0-slide.md'))
    ),
    writeFile(
      join(baseDir, '.github', 'workflows', 'fusuma.yml'),
      await readFile(join(templatePath, 'fusuma.yml'))
    ),
  ]);

  info('init', 'Added slides, style.css, fusumarc, and github actions');
}

module.exports = init;
