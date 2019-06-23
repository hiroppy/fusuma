'use strict';

// use `let` for rewire
let path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const { babel: babelrc } = require('@fusuma/configs');
const css = require('./css');

const configsEntryPoint = require.resolve('@fusuma/configs');
const configsBasePath = configsEntryPoint.split('/src')[0];
const clientEntryPoint = require.resolve('@fusuma/client');
const clientBasePath = clientEntryPoint.split('/src')[0];

module.exports = ({
  meta = {},
  slide = {},
  extends: fileExtends = {},
  internal = {},
  server = {}
}) => {
  // name is deprecated TODO: delete
  const { url, name, description, thumbnail, siteName, sns, title } = meta;
  const {
    sidebar,
    targetBlank = true,
    showIndex = false,
    isVertical = false,
    loop = true,
    code
  } = slide;
  const { js: jsPath, css: cssPath } = fileExtends;
  const { basePath, remoteOrigin } = internal;

  const config =
    process.env.NODE_ENV !== 'production'
      ? require('./webpack.dev.config')()
      : require('./webpack.prod.config')();

  const common = {
    name: name || 'slide',
    entry: ['@babel/polyfill', clientEntryPoint],
    output: {
      path: path.resolve(basePath, 'dist')
    },
    resolveLoader: {
      modules: [
        'node_modules',
        path.resolve(__dirname, '..', 'node_modules'),
        path.join(clientBasePath, 'node_modules'),
        path.join(configsBasePath, 'node_modules')
      ]
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, '..', 'node_modules'),
        path.join(clientBasePath, 'node_modules'),
        path.join(configsBasePath, 'node_modules')
      ]
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          use: {
            loader: 'babel-loader',
            options: {
              ...babelrc(code),
              cwd: configsBasePath
            }
          }
        },
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                ...babelrc(code),
                cwd: configsBasePath
              }
            },
            path.join(__dirname, './fusuma-loader.js')
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[hash].webp'
            }
          }
        },
        {
          test: /\.(webp|eot|ttf|woff2?)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]'
            }
          }
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
        'process.env.SIDEBAR': JSON.stringify(sidebar === undefined ? true : sidebar),
        'process.env.TITLE': JSON.stringify(title || name || 'slide'),
        'process.env.BASE_PATH': JSON.stringify(basePath),
        'process.env.REMOTE_ORIGIN_URL': JSON.stringify(remoteOrigin),
        'process.env.TARGET_BLANK': JSON.stringify(targetBlank),
        'process.env.SHOW_INDEX': JSON.stringify(showIndex),
        'process.env.IS_VERTICAL': JSON.stringify(isVertical),
        'process.env.LOOP': JSON.stringify(loop),
        'process.env.IS_LIVE': JSON.stringify(!!server.isLive),
        'process.env.SERVER_PORT': JSON.stringify(server.port),
        'process.env.SEARCH_KEYWORD': JSON.stringify(server.keyword)
      }),
      new HtmlWebpackPlugin({
        url,
        filename: 'index.html',
        title: title || name || 'slide',
        template: path.join(__dirname, 'template.ejs'),
        image: thumbnail || '',
        siteName,
        description,
        minify:
          process.env.NODE_ENV === 'production'
            ? {
                collapseWhitespace: true
              }
            : false
      }),
      new ImageminWebpWebpackPlugin({})
    ]
  };

  if (jsPath && jsPath.match(/\+*.js$/i)) {
    common.entry.push(path.join(basePath, jsPath));
  }
  if (cssPath && path.extname(cssPath) === '.css') {
    common.entry.push(path.join(clientBasePath, 'src', 'utils', 'customCss.js'));
  }

  return merge.smart(common, config);
};
