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
  const entry = ['regenerator-runtime', join(clientBasePath, '/src/entryPoints/Client.js')];
  const { url, description, thumbnail, siteName, sns, title } = meta;
  const { targetBlank, ui, code, chart, math } = slide;
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
        '@chakra-ui/react': require.resolve('@chakra-ui/react'),
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
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.JS_PATH': JSON.stringify(join(basePath, jsPath || '')),
        'process.env.CSS_PATH': JSON.stringify(join(basePath, cssPath || '')),
        'process.env.SLIDE_PATH': JSON.stringify(join(basePath, 'slides')),
        'process.env.URL': JSON.stringify(url),
        'process.env.HAS_TWITTER': JSON.stringify(sns.includes('twitter')),
        'process.env.TITLE': JSON.stringify(title || 'slide'),
        'process.env.BASE_PATH': JSON.stringify(basePath),
        'process.env.REMOTE_ORIGIN_URL': JSON.stringify(remoteOrigin),
        'process.env.TARGET_BLANK': JSON.stringify(targetBlank),
        'process.env.SERVER_PORT': JSON.stringify(server.port),
        'process.env.SEARCH_KEYWORD': JSON.stringify(server.keyword),
        'process.env.CHART': JSON.stringify(chart),
        'process.env.UI.SIDEBAR': JSON.stringify(ui.sidebar),
        'process.env.UI.COLOR_SCHEME': JSON.stringify(ui.colorScheme),
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
