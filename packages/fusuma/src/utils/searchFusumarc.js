'use strict';

const { readFile } = require('fs').promises;
const { extname } = require('path');
const yaml = require('js-yaml');
const pSearch = require('preferred-search');

const configFileNames = ['.fusumarc.yml', '.fusumarc.js'];

async function searchFusumarc(baseDir, fallbackData) {
  const file = pSearch(baseDir, configFileNames);

  if (!file) {
    return fallbackData;
  }

  switch (extname(file)) {
    case '.yml':
      return yaml.load(await readFile(file, 'utf8'));
    case '.js':
      return require(file);
    default:
      return fallbackData;
  }
}

module.exports = searchFusumarc;
