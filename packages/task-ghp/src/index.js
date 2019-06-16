'use strict';

const ghpages = require('gh-pages');

function deploy(dir, options = {}) {
  return new Promise((resolve, reject) => {
    ghpages.publish(dir, options, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = deploy;
