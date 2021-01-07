'use strict';

const rmfr = require('rmfr');

async function deleteDir(dir) {
  await rmfr(dir);
}

module.exports = deleteDir;
