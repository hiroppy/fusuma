'use strict';

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
    const { protocol, host, port } = server.options;

    console.log(`Running on ${protocol}://${host}:${port} .`);

    if (!flag) cb();
    flag = true;
  });
}

module.exports = run;
