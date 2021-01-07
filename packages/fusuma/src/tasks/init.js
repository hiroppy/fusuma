'use strict';

const fusuma = require('../configs/fusumarc');

async function init({ schema }) {
  if (schema === 'live') {
    await fusuma.live(process.cwd());
  } else {
    await fusuma.init(process.cwd());
  }
}

module.exports = init;
