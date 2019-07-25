'use strict';

const { resolve } = require('path');
const webpack = require('webpack');
const React = require('react');
const jsdom = require('jsdom');
const { deleteDir } = require('@fusuma/utils');
const combineWebpack = require('./webpack.config');

async function ssr(c) {
  return new Promise((resolve, reject) => {
    const config = combineWebpack('ssr', {
      ...c,
      internal: {
        ...c.internal,
        buildStage: 'ssr'
      }
    });
    const compiler = webpack(config);

    const { JSDOM } = jsdom;
    const dom = new JSDOM('', {
      url: 'http://localhost'
    });

    global.window = dom.window;
    global.document = dom.window.document;
    global.location = dom.window.location;

    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }

      try {
        const { Server, render } = require(`${config.output.path}/entry.js`);
        const body = render(React.createElement(Server));

        resolve({ body });
      } catch (e) {
        reject(e);
      } finally {
        deleteDir(config.output.path);
      }
    });
  });
}

async function build(c, { body, fusumaProps }) {
  return new Promise((resolve, reject) => {
    const config = combineWebpack('production', {
      ...c,
      internal: {
        ...c.internal,
        htmlBody: body,
        buildStage: 'build'
      }
    });

    const compiler = webpack(config);

    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      resolve(stats);
    });
  });
}

async function buildProcess(c, cb) {
  const { ssr: isSSR } = c.build;
  let data = {};

  if (isSSR) {
    cb('start-ssr');

    data = await ssr(c);

    cb('finish-ssr');
  }

  cb('start-build');

  return await build(c, data);
}

module.exports = buildProcess;
