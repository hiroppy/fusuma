'use strict';

const { join, isAbsolute } = require('path');
const fusuma = require('../configs/fusumarc');
const { warn, error } = require('../cli/log');

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

  config = fusuma.combine(config, {
    internal: { ...options, basePath, inputDirPath, outputDirPath },
  });

  if (options.isFileServer) {
    return require('./serverFilesForProd')(config);
  }

  switch (type) {
    case 'init':
      return require('./init')(config);
    case 'start':
      return require('./start')(config);
    case 'build':
      return require('./build')(config);
    case 'deploy':
      return require('./deploy')(config);
    case 'pdf':
      return require('./pdf')(config);
    case 'live':
      return require('./live')(config);
  }
}

module.exports = tasks;
