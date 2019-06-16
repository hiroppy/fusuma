'use strict';

const remoteOriginUrl = require('remote-origin-url');

function getRemoteOriginUrl(basePath) {
  return new Promise((resolve) => {
    remoteOriginUrl(`${basePath}/.git/config`, (err, url) => {
      if (err) {
        console.error('Could not find github url');
        resolve('');
      } else {
        url = url || '';

        if (url.includes('git@')) resolve(`https://github.com/${url.split(':')[1]}`);
        else resolve(url);
      }
    });
  });
}

module.exports = getRemoteOriginUrl;
