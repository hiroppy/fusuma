'use strict';

// make use of `let` for rewire
let path = require('path'); // eslint-disable-line prefer-const
const webpack = require('webpack');
const merge = require('webpack-merge');
const Stylish = require('webpack-stylish');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ meta, slide, extends: fileExtends, internal }) => {
  const { url, name, description, thumbnail, siteName, sns } = meta || {};
  const { theme, sidebar } = slide || {};

  const { js: jsPath, css: cssPath } = fileExtends || {};
  const { basePath, remoteOrigin } = internal;

  const config =
    process.env.NODE_ENV !== 'production'
      ? require('./webpack.dev.config')()
      : require('./webpack.prod.config')();

  const common = {
    name: name || 'slide',
    entry: [path.resolve(__dirname, '..', 'frontend', 'lib', 'index.js')],
    output: {
      path: path.resolve(basePath, 'dist'),
      filename: '[hash].js'
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
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader', // dont't use css-modules
            {
              loader: 'postcss-loader',
              options: require('../configs/postcss.config')()()
            },
            {
              loader: 'string-replace-loader',
              options: {
                multiple: [
                  {
                    search: '__body',
                    replace: '.bespoke-parent',
                    flags: 'g'
                  },
                  {
                    search: '__bg',
                    replace: '.bespoke-backdrop',
                    flags: 'g'
                  },
                  {
                    search: '__section-title',
                    replace: '.bespoke-backdrop.section-title',
                    flags: 'g'
                  }
                ]
              }
            }
          ]
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
        }
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
        'process.env.REMOTE_ORIGIN_URL': JSON.stringify(remoteOrigin || meta.repositoryUrl)
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
