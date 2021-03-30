'use strict';

const config = require('prismjs/components');
const getLoader = require('prismjs/dependencies');

const normalizeImportPath = (type) => (name) =>
  `prismjs/${config[type].meta.path.replace(/\{id\}/g, name)}`;

function getLangFiles(langs) {
  const prismModules = getLoader(config, langs).getIds();
  const importedFiles = new Set();

  for (const name of prismModules) {
    if (config.languages[name]) {
      importedFiles.add(normalizeImportPath('languages')(name));
    }
  }

  return importedFiles;
}

module.exports = getLangFiles;
