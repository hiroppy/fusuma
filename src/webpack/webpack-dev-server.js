'use strict';

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

function run(config, cb) {
  const devUrls = [
    `webpack-dev-server/client?http://localhost:${config.devServer.port}/`,
    'webpack/hot/dev-server'
  ];

  if (typeof config.entry === 'string') config.entry = [config.entry];

  if (Array.isArray(config.entry)) {
    config.entry.unshift(...devUrls);
  } else {
    config.entry.__wds.unshift(...devUrls);
  }

  const compiler = webpack(config);
  const devConfig = Object.assign(
    {
      hot: true,
      inline: true,
      contentBase: '.'
    },
    config.devServer
  );

  let flag = false;

  // for `.plugin` of webpack-dev-server
  process.noDeprecation = true;

  compiler.plugin('done', () => {
    if (!flag) {
      cb();
      flag = true;
    }
  });

  const server = new webpackDevServer(compiler, devConfig);

  server.listen(config.devServer.port);
}

module.exports = run;
