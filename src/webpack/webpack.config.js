'use strict';

let path = require('path'); // for rewire
const webpack = require('webpack');
const merge = require('webpack-merge');
const Stylish = require('webpack-stylish');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ meta, slide, extends: fileExtends, internal }) => {
  const { url, name, description, thumbnail, siteName } = meta || {};
  const { theme } = slide || {};

  const { js: jsPath, css: cssPath } = fileExtends || {};
  const { basePath } = internal;

  const config =
    process.env.NODE_ENV !== 'production'
      ? require('./webpack.dev.config')
      : require('./webpack.prod.config');

  const common = {
    name,
    entry: [path.resolve(__dirname, '..', 'frontend', 'lib', 'index.js')],
    output: {
      path: path.resolve(basePath, 'dist'),
      filename: '[hash].js'
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
              options: require('../configs/postcss.config')(webpack)
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
        'process.env.THEME': JSON.stringify(theme),
        'process.env.TITLE': JSON.stringify(name)
      }),
      new HtmlWebpackPlugin({
        url,
        filename: 'index.html',
        title: name,
        template: path.join(__dirname, 'template.ejs'),
        image: thumbnail,
        siteName,
        description
      }),
      new Stylish()
    ]
  };

  if (jsPath && jsPath.match(/\+*.js$/i)) common.entry.push(path.join(basePath, jsPath));

  return merge.smart(common, config);
};
