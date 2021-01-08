'use strict';

// https://github.com/hiroppy/ssr-sample/blob/master/src/server/server.ts

const { createServer } = require('http');
const express = require('express');
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');

async function server(config, options = {}) {
  return new Promise((resolve) => {
    config.entry.unshift('webpack-hot-middleware/client?reload=true');

    const app = express();
    const port = options.internal.port;
    const url = `http://localhost:${port}`;
    const compiler = webpack(config);
    let initialFlag = false;

    app.use(
      webpackHotMiddleware(compiler, {
        log: false,
      })
    );
    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
      })
    );

    const server = createServer(app);

    server.on('error', (err) => {
      console.error(err);
      process.exit(1);
    });

    compiler.hooks.done.tap('fusuma-server', () => {
      if (!initialFlag) {
        console.info(`Listening on ${url}`);
        initialFlag = true;
      }

      resolve();
    });

    server.listen(port);
  });
}

module.exports = server;
