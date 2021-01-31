'use strict';

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function lazyload(pack, cb) {
  try {
    return require(pack);
  } catch (e) {
    if (cb) {
      cb('fallback');
    }
    await exec(`npm install ${pack} --no-save`);

    return require(pack);
  }
}

module.exports = lazyload;
