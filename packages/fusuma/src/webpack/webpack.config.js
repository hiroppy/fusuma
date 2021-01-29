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

class A {
  apply(compiler) {
    compiler.hooks.compilation.tap('A', (compilation) => {
      console.log('aaaa');

      if (!compilation.hooks) {
        compilation.plugin('babel-loader', (c) => {
          console.log(c);
        });
      }
      // compilation.hooks.normalModuleLoader.tap('A', (bb) => {
      //   console.log(bb);
      // });
    });
  }
}

module.exports = (
  type,
  { meta, slide, extends: fileExtends, internal = {}, server = {}, build }
) => {
  const entry = ['regenerator-runtime', join(clientBasePath, '/src/entryPoints/Client.js')];
  const { url, description, thumbnail, siteName, sns, title } = meta;
  const { sidebar, targetBlank, showIndex, isVertical, loop, code, chart, math } = slide;
  const { js: jsPath, css: cssPath, webpack: webpackPath } = fileExtends;
  const { useCache, publicPath } = build;
  const { basePath, remoteOrigin, htmlBody = '', buildStage, outputDirPath } = internal;
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
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.JS_PATH': JSON.stringify(join(basePath, jsPath || '')),
        'process.env.CSS_PATH': JSON.stringify(join(basePath, cssPath || '')),
        'process.env.SLIDE_PATH': JSON.stringify(join(basePath, 'slides')),
        'process.env.URL': JSON.stringify(url),
        'process.env.SNS': JSON.stringify(sns),
        'process.env.SIDEBAR': JSON.stringify(sidebar === undefined ? true : sidebar),
        'process.env.TITLE': JSON.stringify(title || 'slide'),
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
        'process.env.BUILD_STAGE': JSON.stringify(buildStage),
      }),
      new HtmlWebpackPlugin({
        url,
        filename: 'index.html',
        title: title || 'slide',
        template: join(__dirname, 'template.ejs'),
        image: thumbnail || `${url.endsWith('/') ? url : `${url}/`}thumbnail.png`,
        siteName,
        description,
        math,
        body: htmlBody,
      }),
      new A(),
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
