'use strict';

// use `let` for rewire
let path = require('path');
const { existsSync } = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const { babel: babelrc } = require('@fusuma/configs');
const css = require('./css');

const srcDirPath = `${path.sep}src`;

const configsEntryPoint = require.resolve('@fusuma/configs');
const configsBasePath = configsEntryPoint
  .split(srcDirPath)
  .slice(0, -1)
  .join(srcDirPath);
const clientEntryPoint = require.resolve('@fusuma/client');
const clientBasePath = clientEntryPoint
  .split(srcDirPath)
  .slice(0, -1)
  .join(srcDirPath);
const mdxLoaderEntryPoint = require.resolve('@fusuma/mdx-loader');
const mdxLoaderBasePath = mdxLoaderEntryPoint
  .split(srcDirPath)
  .slice(0, -1)
  .join(srcDirPath);

module.exports = (
  type,
  { meta, slide, extends: fileExtends, internal = {}, server = {}, build }
) => {
  const entry = [
    'regenerator-runtime',
    type !== 'ssr'
      ? path.join(clientBasePath, '/src/entryPoints/Client.js')
      : path.join(clientBasePath, 'src/entryPoints/Server.js')
  ];

  // name, url is deprecated TODO: delete
  const { url, name, description, thumbnail, siteName, sns, title } = meta;
  const { sidebar, targetBlank, showIndex, isVertical, loop, code, chart, math } = slide;
  const { js: jsPath, css: cssPath, webpack: webpackPath } = fileExtends;
  const { ssr } = build;
  const { basePath, remoteOrigin, htmlBody = '', buildStage } = internal;
  const outputPath = path.resolve(basePath, 'dist');
  const config = (() => {
    switch (type) {
      case 'production':
        return require('./webpack.prod.config')();
      case 'ssr':
        return require('./webpack.ssr.config')({ clientBasePath });
      default:
        return require('./webpack.dev.config')();
    }
  })();

  const common = {
    name: name || 'slide',
    entry,
    output: {
      path: outputPath
    },
    resolveLoader: {
      modules: [
        'node_modules',
        path.resolve(__dirname, '..', 'node_modules'),
        path.join(clientBasePath, 'node_modules'),
        path.join(configsBasePath, 'node_modules'),
        path.join(mdxLoaderBasePath, 'node_modules')
      ]
    },
    resolve: {
      alias: {
        // https://github.com/facebook/react/issues/13991
        // for dev
        react: process.env.FUSUMA_DEBUG
          ? path.resolve(__dirname, '../node_modules/react')
          : require.resolve('react')
      },
      modules: [
        'node_modules',
        path.resolve(__dirname, '..', 'node_modules'),
        path.join(clientBasePath, 'node_modules'),
        path.join(configsBasePath, 'node_modules'),
        path.join(mdxLoaderBasePath, 'node_modules')
      ]
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          use: [
            'cache-loader', // don't run when FUSUMA_DEBUG is true
            {
              loader: 'babel-loader',
              options: {
                ...babelrc(code),
                cwd: configsBasePath
              }
            }
          ]
        },
        {
          test: /\.mdx?$/,
          use: [
            'cache-loader',
            {
              loader: 'babel-loader',
              options: {
                ...babelrc(code),
                cwd: configsBasePath
              }
            },
            {
              loader: '@fusuma/mdx-loader',
              options: {
                math
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[hash].webp'
              }
            }
          ]
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
        'process.env.IS_LIVE': JSON.stringify(server.isLive),
        'process.env.SERVER_PORT': JSON.stringify(server.port),
        'process.env.SEARCH_KEYWORD': JSON.stringify(server.keyword),
        'process.env.CHART': JSON.stringify(chart),
        'process.env.SSR': JSON.stringify(process.env.NODE_ENV === 'production' && ssr),
        'process.env.BUILD_STAGE': JSON.stringify(buildStage)
      }),
      new ImageminWebpWebpackPlugin({
        detailedLogs: false,
        silent: true
      })
    ]
  };

  if (type !== 'ssr') {
    common.plugins.push(
      new HtmlWebpackPlugin({
        url,
        filename: 'index.html',
        title: title || name || 'slide',
        template: path.join(__dirname, 'template.ejs'),
        image: thumbnail || '',
        siteName,
        description,
        math,
        body: htmlBody,
        minify:
          process.env.NODE_ENV === 'production'
            ? {
                collapseWhitespace: true
              }
            : false
      })
    );
  }

  if (type !== 'ssr') {
    if (jsPath && jsPath.match(/\+*.js$/i)) {
      common.entry.push(path.join(basePath, jsPath));
    }

    if (cssPath) {
      const p = path.join(basePath, cssPath);

      if (path.extname(p) === '.css' && existsSync(p)) {
        common.entry.push(path.join(clientBasePath, 'src', 'utils', 'customCss.js'));
      }
    }
  }

  return merge.smart(common, config, webpackPath ? require(path.join(basePath, webpackPath)) : {});
};
