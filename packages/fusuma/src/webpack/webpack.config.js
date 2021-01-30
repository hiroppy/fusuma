'use strict';

const { join, resolve, extname, sep } = require('path');
const { existsSync } = require('fs');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelrc = require('../configs/babelrc');
const css = require('./css');

const srcDirPath = `${sep}src`;
const configsEntryPoint = require.resolve('../configs');
const configsBasePath = configsEntryPoint.split(srcDirPath).slice(0, -1).join(srcDirPath);
const clientEntryPoint = require.resolve('@fusuma/client');
const clientBasePath = clientEntryPoint.split(srcDirPath).slice(0, -1).join(srcDirPath);
const mdxLoaderEntryPoint = require.resolve('@fusuma/mdx-loader');
const mdxLoaderBasePath = mdxLoaderEntryPoint.split(srcDirPath).slice(0, -1).join(srcDirPath);

module.exports = (
  type,
  { meta, slide, extends: fileExtends, internal = {}, server = {}, build }
) => {
  const entry = ['regenerator-runtime', join(clientBasePath, '/src/entryPoints/Client.js')];
  const { url, description, thumbnail, siteName, sns, title } = meta;
  const {
    targetBlank,
    ui: { sidebar, pagination, effect },
    loop,
    vertical,
    code,
    chart,
    math,
  } = slide;
  const { js: jsPath, css: cssPath, webpack: webpackPath } = fileExtends;
  const { useCache, publicPath } = build;
  const { basePath, remoteOrigin, htmlBody = '', outputDirPath } = internal;
  const config = (() => {
    switch (type) {
      case 'production':
        return require('./webpack.prod.config')();
      default:
        return require('./webpack.dev.config')();
    }
  })();

  const common = {
    entry,
    output: {
      path: outputDirPath,
      publicPath: process.env.NODE_ENV === 'production' ? publicPath : '/',
    },
    resolveLoader: {
      modules: [
        'node_modules',
        resolve(__dirname, '../../node_modules'),
        join(clientBasePath, 'node_modules'),
        join(configsBasePath, 'node_modules'),
        join(mdxLoaderBasePath, 'node_modules'),
      ],
    },
    resolve: {
      mainFields: ['module', 'main'],
      alias: {
        // https://github.com/facebook/react/issues/13991
        // for dev
        react: process.env.FUSUMA_DEBUG
          ? resolve(__dirname, '../../node_modules/react')
          : require.resolve('react'),
      },
      modules: [
        'node_modules',
        resolve(__dirname, '..', 'node_modules'),
        join(process.cwd(), 'node_modules'),
        join(clientBasePath, 'node_modules'),
        join(configsBasePath, 'node_modules'),
        join(mdxLoaderBasePath, 'node_modules'),
      ],
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                ...babelrc(code),
                cwd: configsBasePath,
              },
            },
          ],
        },
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                ...babelrc(code),
                cwd: configsBasePath,
              },
            },
            {
              loader: '@fusuma/mdx-loader',
              options: {
                math,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|)$/,
          type: 'asset/resource',
          generator: {
            filename: '[hash].webp',
          },
          loader: 'webp-loader',
          options: {
            quality: 50,
          },
        },
        {
          test: /\.(svg|gif|webp|eot|ttf|woff2?)$/,
          type: 'asset/resource',
          generator: {
            filename: '[hash][ext]',
          },
        },
        css(),
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
          JS_PATH: JSON.stringify(join(basePath, jsPath || '')),
          CSS_PATH: JSON.stringify(join(basePath, cssPath || '')),
          SLIDE_PATH: JSON.stringify(join(basePath, 'slides')),
          URL: JSON.stringify(url),
          SNS: JSON.stringify(sns),
          TITLE: JSON.stringify(title || 'slide'),
          BASE_PATH: JSON.stringify(basePath),
          REMOTE_ORIGIN_URL: JSON.stringify(remoteOrigin),
          TARGET_BLANK: JSON.stringify(targetBlank),
          LOOP: JSON.stringify(loop),
          VERTICAL: JSON.stringify(vertical),
          IS_LIVE: JSON.stringify(server.isLive),
          SERVER_PORT: JSON.stringify(server.port),
          SEARCH_KEYWORD: JSON.stringify(server.keyword),
          CHART: JSON.stringify(chart),
          UI: {
            SIDEBAR: JSON.stringify(sidebar),
            PAGINATION: JSON.stringify(pagination),
            EFFECT: JSON.stringify(effect),
          },
        },
      }),
      new HtmlWebpackPlugin({
        url,
        filename: 'index.html',
        title: title || 'slide',
        template: join(__dirname, 'template.ejs'),
        image: thumbnail || `${url && url.endsWith('/') ? url : `${url}/`}thumbnail.png`,
        siteName,
        description,
        math,
        body: htmlBody,
      }),
    ],
    infrastructureLogging: {
      level: 'none',
    },
    cache: {
      type: useCache ? 'filesystem' : 'memory',
      ...(useCache
        ? {
            buildDependencies: {
              config: [__filename],
            },
          }
        : {}),
    },
    experiments: {
      topLevelAwait: true,
    },
  };

  if (jsPath && jsPath.match(/\+*.js$/i)) {
    common.entry.push(join(basePath, jsPath));
  }

  if (cssPath) {
    const p = join(basePath, cssPath);

    if (extname(p) === '.css' && existsSync(p)) {
      common.entry.push(join(clientBasePath, 'src', 'utils', 'customCss.js'));
    }
  }

  return merge(common, config, webpackPath ? require(join(basePath, webpackPath)) : {});
};
