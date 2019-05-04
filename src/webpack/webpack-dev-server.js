'use strict';

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

function run(config, cb) {
  const url = `http://localhost:${config.devServer.port}`;
  const devUrls = [`webpack-dev-server/client?${url}`, 'webpack/hot/dev-server'];

  if (typeof config.entry === 'string') config.entry = [config.entry];

  if (Array.isArray(config.entry)) {
    config.entry.unshift(...devUrls);
  } else {
    config.entry.__wds.unshift(...devUrls);
  }

  const compiler = webpack(config);

  let flag = false;

  // for `.plugin` of webpack-dev-server
  process.noDeprecation = true;

  compiler.plugin('done', () => {
    if (!flag) {
      console.log(`Running at ${url}`);

      cb();
      flag = true;
    }
  });

  const server = new webpackDevServer(compiler, config.devServer);

  server.listen(config.devServer.port);
}

module.exports = run;
