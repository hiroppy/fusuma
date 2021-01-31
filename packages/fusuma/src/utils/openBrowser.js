'use stirct';

const open = require('open');

async function openBrowser(url) {
  await open(url);
}

module.exports = openBrowser;
