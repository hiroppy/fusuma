'use strict';

const { readFile, writeFile, mkdir } = require('fs');
const { join, extname } = require('path');
const { promisify } = require('util');
const yaml = require('js-yaml');
const pSearch = require('preferred-search');
const { all: mergeAll } = require('deepmerge');
const { info } = require('../cli/log');

const mkdirAsync = promisify(mkdir);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

const config = {
  meta: {
    url: null,
    title: null,
    thumbnail: null,
    description: null,
    sns: ['twitter'], // twitter, hatena
  },
  slide: {
    loop: true,
    sidebar: true,
    targetBlank: true,
    showIndex: true,
    isVertical: false,
    // https://github.com/mAAdhaTTah/babel-plugin-prismjs#configuring-the-plugin
    code: {
      languages: ['javascript'],
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
  {
    const data = await readFileAsync(join(__dirname, 'templates', 'fusumarc.yml'), 'utf8');

    await writeFileAsync(join(baseDir, '.fusumarc.yml'), data);
    info('init', 'Created .fusumarc.yml');
  }

  // scaffold
  await mkdirAsync(join(baseDir, 'slides'));
  info('init', 'Created slides directory');

  {
    const data = await readFileAsync(join(__dirname, 'templates', '0-title.md'), 'utf8');

    await writeFileAsync(join(baseDir, 'slides', '0-title.md'), data);
    info('init', 'Created slides/0-title.md');
  }

  {
    const data = await readFileAsync(join(__dirname, 'templates', 'style.css'), 'utf8');

    await writeFileAsync(join(baseDir, 'style.css'), data);
    info('init', 'Created style.css');
  }
}

async function read(baseDir) {
  const file = pSearch(baseDir, configFileNames);

  if (!file) {
    return config;
  }

  switch (extname(file)) {
    case '.yml':
      return yaml.load(await readFileAsync(file, 'utf8'));
    case '.js':
      return require(file);
    default:
      return config;
  }
}

async function live(baseDir) {
  const schema = `# need to create keys, see https://developer.twitter.com/
CONSUMER_KEY=
CONSUMER_SECRET=
ACCESS_TOKEN_KEY=
ACCESS_TOKEN_SECRET=
`;

  await writeFileAsync(join(baseDir, '.env'), schema);
}

function combine(userConfig, extendConfig = {}) {
  const overwriteMerge = (destinationArray, sourceArray) => sourceArray;

  return mergeAll([config, userConfig, extendConfig], { arrayMerge: overwriteMerge });
}

module.exports = {
  init,
  read,
  live,
  combine,
};
