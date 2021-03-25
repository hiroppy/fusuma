'use strict';

const { join, resolve, extname, sep } = require('path');
const { existsSync } = require('fs');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssConfig = require('../configs/postcss.config');
const babelrc = require('../configs/babelrc');

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
  // const entry = ['regenerator-runtime', join(clientBasePath, '/src/entryPoints/Client.js')];
  const entry = ['regenerator-runtime', join(require.resolve('@fusuma/client-editor'))];
  const { url, description, thumbnail, siteName, sns, title } = meta;
  const {
    targetBlank,
    ui: { sidebar, pagination, effect, vertical },
    loop,
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
        return require('./webpack.prod.config')({ meta });
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
        react: require.resolve('react'),
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
          exclude: /setup\/prism.js/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                ...babelrc(),
                cwd: configsBasePath,
              },
            },
          ],
        },
        {
          test: /setup\/prism.js/,
          use: [
            {
              loader: '@fusuma/prism-loader',
              options: {
                dirPath: join(basePath, 'slides'),
                theme: code.theme,
                plugins: code.plugins,
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
          test: /\.(svg|gif|webp|mp4|webm|eot|ttf|woff2?)$/,
          type: 'asset/resource',
          generator: {
            filename: '[hash][ext]',
          },
        },
        {
          test: /\.css$/,
          use: [
            type === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: false,
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: postcssConfig(),
            },
          ],
        },
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
          HAS_TWITTER: JSON.stringify(sns.includes('twitter')),
          TITLE: JSON.stringify(title || 'slide'),
          BASE_PATH: JSON.stringify(basePath),
          REMOTE_ORIGIN_URL: JSON.stringify(remoteOrigin),
          TARGET_BLANK: JSON.stringify(targetBlank),
          LOOP: JSON.stringify(loop),
          SERVER_PORT: JSON.stringify(server.port),
          SEARCH_KEYWORD: JSON.stringify(server.keyword),
          CHART: JSON.stringify(chart),
          UI: {
            SIDEBAR: JSON.stringify(sidebar),
            VERTICAL: JSON.stringify(vertical),
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
