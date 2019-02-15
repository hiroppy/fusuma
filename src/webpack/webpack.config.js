'use strict';

// make use of `let` for rewire
let path = require('path'); // eslint-disable-line prefer-const
const webpack = require('webpack');
const merge = require('webpack-merge');
const Stylish = require('webpack-stylish');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const css = require('./css');

module.exports = ({ meta, slide, extends: fileExtends, internal }) => {
  const { url, name, description, thumbnail, siteName, sns, repositoryUrl } = meta || {};
  const { theme, sidebar, targetBlank = true, pageNumber = false } = slide || {};

  const { js: jsPath, css: cssPath } = fileExtends || {};
  const { basePath, remoteOrigin } = internal;

  const config =
    process.env.NODE_ENV !== 'production'
      ? require('./webpack.dev.config')()
      : require('./webpack.prod.config')();

  const common = {
    name: name || 'slide',
    entry: ['babel-polyfill', path.resolve(__dirname, '..', 'frontend', 'lib', 'index.js')],
    output: {
      path: path.resolve(basePath, 'dist')
    },
    resolveLoader: {
      modules: ['node_modules', path.resolve(__dirname, '..', '..', 'node_modules')]
    },
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, '..', '..', 'node_modules')]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: require('../configs/babelrc')
          }
        },
        {
          test: /\.md$/,
          use: ['html-loader', 'markdown-loader']
        },
        {
          test: /\.(png|jpg|gif|svg?)$/,
          use: ['file-loader', 'image-webpack-loader']
        },
        {
          test: /\.(eot|ttf|woff2?)$/,
          use: 'file-loader'
        },
        css()
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.JS_PATH': JSON.stringify(path.join(basePath, jsPath || '')),
        'process.env.CSS_PATH': JSON.stringify(path.join(basePath, cssPath || '')),
        'process.env.SLIDE_PATH': JSON.stringify(path.join(basePath, 'slides')),
        'process.env.URL': JSON.stringify(url),
        'process.env.SNS': JSON.stringify(sns),
        'process.env.THEME': JSON.stringify(theme || ''),
        'process.env.SIDEBAR': JSON.stringify(sidebar === undefined ? true : sidebar),
        'process.env.TITLE': JSON.stringify(name),
        'process.env.BASE_PATH': JSON.stringify(basePath),
        'process.env.REMOTE_ORIGIN_URL': JSON.stringify(repositoryUrl || remoteOrigin),
        'process.env.TARGET_BLANK': JSON.stringify(targetBlank),
        'process.env.PAGE_NUMBER': JSON.stringify(pageNumber)
      }),
      new HtmlWebpackPlugin({
        url,
        filename: 'index.html',
        title: name || 'slide',
        template: path.join(__dirname, 'template.ejs'),
        image: thumbnail || '',
        siteName,
        description
      }),
      new Stylish()
    ]
  };

  if (jsPath && jsPath.match(/\+*.js$/i)) {
    common.entry.push(path.join(basePath, jsPath));
  }
  if (cssPath && path.extname(cssPath) === '.css') {
    common.entry.push(path.resolve(__dirname, '..', 'frontend', 'lib', 'custom-css.js'));
  }

  return merge.smart(common, config);
};
