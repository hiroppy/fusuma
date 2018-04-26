'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const Stylish = require('webpack-stylish');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config =
  process.env.NODE_ENV !== 'production'
    ? require('./webpack.dev.config')
    : require('./webpack.prod.config');

module.exports = ({ meta, slide, extends: fileExtends }) => {
  const { url, name, description, thumbnail, siteName } = meta;
  const { theme } = slide;

  const { js: jsPath, css: cssPath } = fileExtends ? fileExtends : {};

  const common = {
    name,
    entry: [path.resolve(__dirname, '..', 'frontend', 'lib', 'index.js')],
    output: {
      path: path.resolve(process.cwd(), 'dist'),
      filename: '[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: path.resolve(process.cwd(), 'node_modules'),
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
        'process.env.JS_PATH': JSON.stringify(path.join(process.cwd(), jsPath || '')),
        'process.env.CSS_PATH': JSON.stringify(path.join(process.cwd(), cssPath || '')),
        'process.env.SLIDE_PATH': JSON.stringify(path.join(process.cwd(), 'slides')),
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

  if (jsPath && jsPath.match(/\+*.js$/i)) common.entry.push(path.join(process.cwd(), jsPath));

  return merge.smart(common, config);
};
