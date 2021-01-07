'use strict';

const { join } = require('path');
const init = require('./init');
const start = require('./start');
const build = require('./build');
const deploy = require('./deploy');
const pdf = require('./pdf');

async function tasks({ type, options }) {
  const basePath = join(process.cwd(), options.dir || '');

  switch (type) {
    case 'init':
      return init(options);
    case 'start':
      return start(basePath, options);
    case 'build':
      return build(basePath);
    case 'deploy':
      return deploy(basePath);
    case 'pdf':
      return pdf(basePath, options);
    case 'live':
      return live(basePath, options);
  }
}

module.exports = tasks;
