'use strict';

async function lazyload(pack, cb) {
  const { spawn } = require('child-process-promise');

  try {
    return require(pack);
  } catch (e) {
    if (cb) {
      cb('fallback');
    }

    await spawn('npm', ['install', pack, '--no-save']);

    return require(pack);
  }
}

module.exports = lazyload;
