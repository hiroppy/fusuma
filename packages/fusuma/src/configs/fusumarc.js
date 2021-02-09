'use strict';

const { readFile, writeFile, mkdir } = require('fs').promises;
const { join, extname } = require('path');
const yaml = require('js-yaml');
const pSearch = require('preferred-search');
const { all: mergeAll } = require('deepmerge');
const { info } = require('../cli/log');

const config = {
  meta: {
    url: null,
    title: null,
    siteName: null,
    thumbnail: null,
    description: null,
    sns: ['twitter'], // twitter
  },
  slide: {
    loop: false,
    targetBlank: true,
    ui: {
      sidebar: true,
      vertical: false,
      pagination: null, // bullets | progressbar | fraction
      effect: null, // fade | cube | flip
    },
    code: {
      plugins: [],
      theme: 'default',
    },
    chart: false,
    math: false,
  },
  extends: {
    js: null,
    css: './style.css',
    webpack: null,
  },
  build: {
    useCache: true,
    publicPath: '',
  },
};

const configFileNames = ['.fusumarc.yml', '.fusumarc.js'];

async function init(baseDir) {
  const templatePath = join(__dirname, 'templates');

  await Promise.all([
    mkdir(join(baseDir, 'slides'), { recursive: true }),
    mkdir(join(baseDir, '.github', 'workflows'), { recursive: true }),
  ]);

  await Promise.all([
    writeFile(join(baseDir, '.fusumarc.yml'), await readFile(join(templatePath, 'fusumarc.yml'))),
    writeFile(join(baseDir, 'style.css'), await readFile(join(templatePath, 'style.css'))),
    writeFile(
      join(baseDir, 'slides', '0-title.md'),
      await readFile(join(templatePath, '0-title.md'))
    ),
    writeFile(
      join(baseDir, '.github', 'workflows', 'fusuma.yml'),
      await readFile(join(templatePath, 'fusuma.yml'))
    ),
  ]);

  info('init', 'Added slides, style.css, fusumarc, and github actions');
}

async function read(baseDir) {
  const file = pSearch(baseDir, configFileNames);

  if (!file) {
    return config;
  }

  switch (extname(file)) {
    case '.yml':
      return yaml.load(await readFile(file, 'utf8'));
    case '.js':
      return require(file);
    default:
      return config;
  }
}

function combine(userConfig, extendConfig = {}) {
  const overwriteMerge = (destinationArray, sourceArray) => sourceArray;

  return mergeAll([config, userConfig, extendConfig], { arrayMerge: overwriteMerge });
}

module.exports = {
  init,
  read,
  combine,
};
