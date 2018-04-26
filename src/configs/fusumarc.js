'use strict';

const fs = require('fs');
const { promisify } = require('util');
const yaml = require('js-yaml');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const configFile = `meta:
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

async function init(p) {
  try {
    await writeFileAsync(p, configFile);
  } catch (e) {
    throw e;
  }
}

async function read(p) {
  try {
    if (!p) return;
    const data = await readFileAsync(p, 'utf8');

    return yaml.safeLoad(data);
  } catch (e) {
    throw e;
  }
}

module.exports = {
  init,
  read
};
