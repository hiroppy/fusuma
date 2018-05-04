'use strict';

const fs = require('fs');
const { join, extname } = require('path');
const { promisify } = require('util');
const yaml = require('js-yaml');
const pSearch = require('preferred-search');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const configFileYml = `meta:
  url:
  name:
  author:
  description:
  thumbnail:
  siteName:
slide:
  theme: js
extends:
  js:
  css:
`;

const configFileNames = ['.fusumarc.yml', '.fusumarc.js'];

async function init(baseDir) {
  try {
    await writeFileAsync(join(baseDir, '.fusumarc.yml'), configFileYml);
  } catch (e) {
    throw e;
  }
}

async function read(baseDir) {
  const file = pSearch(baseDir, configFileNames);

  if (file === null) {
    throw new Error('Could not find a configure file. init command creates a configure file.');
  }

  switch (extname(file)) {
    case '.yml':
      return yaml.safeLoad(await readFileAsync(file, 'utf8'));
    case '.js':
      return require(file);
  }
}

module.exports = {
  init,
  read
};
