'use strict';

const { join } = require('path');
const fusuma = require('../configs/fusumarc');
const init = require('./init');
const start = require('./start');
const build = require('./build');
const deploy = require('./deploy');
const pdf = require('./pdf');

async function tasks({ type, options }) {
  const { basePath, inputDir, outputDir } = options;
  const inputDirPath = join(basePath, inputDir || 'slides');
  const outputDirPath = join(basePath, outputDir || 'dist');
  let config = {};

  try {
    config = await fusuma.read(basePath);
  } catch (e) {
  } finally {
    config = fusuma.combine(config, {
      internal: { ...options, basePath, inputDirPath, outputDirPath },
    });
  }

  switch (type) {
    case 'init':
      return init(config);
    case 'start':
      return start(config);
    case 'build':
      return build(config);
    case 'deploy':
      return deploy(config);
    case 'pdf':
      return pdf(config);
    case 'live':
      return live(config);
  }
}

module.exports = tasks;
