'use strict';

const { fusuma } = require('@fusuma/configs');

async function init(p) {
  await fusuma.init(p);
}

module.exports = init;
