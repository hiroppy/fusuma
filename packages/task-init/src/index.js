'use strict';

const { fusuma } = require('@fusuma/configs');

async function init(p, schema) {
  if (schema === 'live') {
    await fusuma.live(p);
  } else {
    await fusuma.init(p);
  }
}

module.exports = init;
