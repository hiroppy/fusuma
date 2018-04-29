'use strict';

const fs = require('fs');
const { join, extname } = require('path');
const { promisify } = require('util');
const yaml = require('js-yaml');

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
  try {
    const { filename, ext } = getFilenameForDirectory(baseDir) || {};

    if (filename === undefined) {
      throw new Error('Could not find a configure file. init command creates a configure file.');
    }

    switch (ext) {
      case '.yml':
        return yaml.safeLoad(await readFileAsync(filename, 'utf8'));
      case '.js':
        return require(filename);
    }
  } catch (e) {
    throw e;
  }
}

function getFilenameForDirectory(directory) {
  for (let i = 0; i < configFileNames.length; i++) {
    const filename = join(directory, configFileNames[i]);

    if (fs.existsSync(filename) && fs.statSync(filename).isFile()) {
      return {
        filename,
        ext: extname(filename)
      };
    }
  }

  return null;
}

module.exports = {
  init,
  read
};
