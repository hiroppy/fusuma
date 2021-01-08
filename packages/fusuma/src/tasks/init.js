'use strict';

const fusuma = require('../configs/fusumarc');

async function init(options) {
  if (options.internal.schema === 'live') {
    await fusuma.live(process.cwd());
  } else {
    await fusuma.init(process.cwd());
  }
}

module.exports = init;
