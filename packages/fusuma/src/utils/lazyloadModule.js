'use strict';

const util = require('util');
const spawn = util.promisify(require('child_process').spawn);

async function lazyload(pack, cb) {
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
