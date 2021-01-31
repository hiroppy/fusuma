'use strict';

const gitRemoteOriginUrl = require('git-remote-origin-url');

async function getRemoteOriginUrl() {
  let url = await gitRemoteOriginUrl();

  if (url.includes('git@')) {
    url = `https://github.com/${url.split(':')[1]}`;
  }

  return url;
}

module.exports = getRemoteOriginUrl;
