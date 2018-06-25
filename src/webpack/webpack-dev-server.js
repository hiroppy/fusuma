'use strict';

const webpack = require('webpack');
const serve = require('webpack-serve');

async function run(config, cb) {
  const server = await serve({
    config: {
      ...config,
      serve: {
        dev: { logLevel: 'silent', publicPath: '/' },
        hot: { logLevel: 'silent' },
        logLevel: 'silent'
      }
    }
  });
  let flag = false;

  server.on('build-finished', () => {
    if (!flag) cb();
    flag = true;
  });
}

module.exports = run;
