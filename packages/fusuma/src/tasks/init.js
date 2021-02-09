'use strict';

const fusuma = require('../configs/fusumarc');

async function init() {
  await fusuma.init(process.cwd());
}

module.exports = init;
