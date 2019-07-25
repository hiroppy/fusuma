'use strict';

const { readFile, writeFile, mkdir } = require('fs');
const { join, extname } = require('path');
const { promisify } = require('util');
const yaml = require('js-yaml');
const pSearch = require('preferred-search');
const { all: mergeAll } = require('deepmerge');

const mkdirAsync = promisify(mkdir);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

const config = {
  meta: {
    title: null,
    thumbnail: null,
    description: null,
    sns: ['twitter'] // twitter, hatena
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
      theme: 'default'
    },
    chart: false,
    math: false
  },
  extends: {
    js: null,
    css: './style.css',
    webpack: null
  },
  build: {
    ssr: true
  }
};

const configFileNames = ['.fusumarc.yml', '.fusumarc.js'];

function getConfigYaml() {
  const configYaml = yaml.safeDump(config).replace(/null/g, '');

  return configYaml
    .split('\n')
    .map((s) => {
      if (s.substr(-1) === ' ') return s.slice(0, -1);
      else return s;
    })
    .join('\n');
}

async function init(baseDir) {
  try {
    await writeFileAsync(join(baseDir, '.fusumarc.yml'), getConfigYaml());
    console.info('Created .fusumarc.yml');

    // scaffold
    await mkdirAsync(join(baseDir, 'slides'));
    console.info('Created slides directory');

    {
      const data = await readFileAsync(join(__dirname, 'templates', '0-title.md'), 'utf8');

      await writeFileAsync(join(baseDir, 'slides', '0-title.md'), data);
      console.info('Created slides/0-title.md');
    }

    {
      const data = await readFileAsync(join(__dirname, 'templates', 'style.css'), 'utf8');

      await writeFileAsync(join(baseDir, 'style.css'), data);
      console.info('Created style.css');
    }
  } catch (e) {
    throw e;
  }
}

async function read(baseDir) {
  const file = pSearch(baseDir, configFileNames);

  if (!file) {
    return config;
  }

  switch (extname(file)) {
    case '.yml':
      return yaml.safeLoad(await readFileAsync(file, 'utf8'));
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

  try {
    await writeFileAsync(join(baseDir, '.env'), schema);
  } catch (e) {
    throw e;
  }
}

function combine(userConfig, extendConfig = {}) {
  const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

  return mergeAll([config, userConfig, extendConfig], { arrayMerge: overwriteMerge });
}

module.exports = {
  init,
  read,
  live,
  combine
};
