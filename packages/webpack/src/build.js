'use strict';

const { resolve } = require('path');
const webpack = require('webpack');
const React = require('react');
const jsdom = require('jsdom');
const { deleteDir } = require('@fusuma/utils');
const combineWebpack = require('./webpack.config');

async function ssr(c) {
  return new Promise((resolve, reject) => {
    const config = combineWebpack('ssr', c);
    const compiler = webpack(config);

    const { JSDOM } = jsdom;
    const dom = new JSDOM();

    global.window = dom.window;
    global.document = dom.window.document;
    global.location = dom.window.location;

    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }

      try {
        const { ServerApp, render, getFusumaProps } = require(`${config.output.path}/entry.js`);
        const body = render(React.createElement(ServerApp));
        const fusumaProps = getFusumaProps();

        resolve({ body, fusumaProps });
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
        htmlBody: body
        // htmlProps: escape(JSON.stringify(fusumaProps))
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
  cb('start-ssr');

  const data = await ssr(c);

  cb('finish-ssr');
  cb('start-build');

  return await build(c, data);

  cb('finish-build');
}

module.exports = buildProcess;
