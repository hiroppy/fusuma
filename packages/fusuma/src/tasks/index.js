'use strict';

const { existsSync } = require('fs');
const { join, isAbsolute } = require('path');
const fusumarc = require('../configs/fusumarc');
const combineObject = require('../utils/combineObject');
const searchFusumarc = require('../utils/searchFusumarc');
const { warn, error } = require('../cli/log');

async function tasks({ type, options }) {
  const { inputDir, outputDir } = options;
  const basePath = isAbsolute(options.basePath)
    ? options.basePath
    : join(process.cwd(), options.basePath);
  const inputDirPath = join(basePath, inputDir || 'slides');
  const outputDirPath = join(basePath, outputDir || 'dist');
  let config = {};

  if (type !== 'init' && !existsSync(inputDirPath)) {
    error('preparation', '"slides" directory not found');
    process.exit(1);
  }

  try {
    config = await searchFusumarc(basePath, fusumarc);
  } catch (e) {
    warn('config', `it seems fusumarc doesn't exist, you can run "fusuma init" command`);
  }

  if (config.meta && config.meta.url) {
    if (!config.build) {
      config.build = {};
    }

    if (!config.build.publicPath) {
      try {
        const { pathname } = new URL(config.meta.url);

        config.build.publicPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
      } catch (e) {
        error('preparation', `meta.url specified isn't a URL`);
      }
    }
  }

  config = combineObject(fusumarc, config, {
    internal: { ...options, basePath, inputDirPath, outputDirPath },
  });

  if (config.slide.chart) {
    try {
      if (!existsSync(join(process.cwd(), 'node_modules', 'mermaid'))) {
        throw new Error('mermaid not found, please run "npm i mermaid"');
      }
    } catch (e) {
      error('preparation', e.message);
      process.exit(1);
    }
  }

  switch (type) {
    case 'init':
      return require('./init')(config);
    case 'start':
      return require('./start')(config);
    case 'startProd':
      return require('./startProd')(config);
    case 'build':
      return require('./build')(config);
    case 'deploy':
      return require('./deploy')(config);
    case 'pdf':
      return require('./pdf')(config);
    default:
      error('cli', `the command not found, please see "--help"`);
  }
}

module.exports = tasks;
