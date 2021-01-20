'use strict';

const { join, isAbsolute } = require('path');
const fusuma = require('../configs/fusumarc');
const { warn } = require('../cli/log');
const init = require('./init');
const start = require('./start');
const build = require('./build');
const deploy = require('./deploy');
const pdf = require('./pdf');

async function tasks({ type, options }) {
  const { inputDir, outputDir } = options;
  const basePath = isAbsolute(options.basePath)
    ? options.basePath
    : join(process.cwd(), options.basePath);
  const inputDirPath = join(basePath, inputDir || 'slides');
  const outputDirPath = join(basePath, outputDir || 'dist');
  let config = {};

  try {
    config = await fusuma.read(basePath);
  } catch (e) {
    warn('config', `it seems fusumarc doesn't exist, you can run "fusuma init" command`);
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
