'use strict';

const webpack = require('webpack');
const workboxPlugin = require('workbox-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', // dont't use css-modules
            {
              loader: 'postcss-loader',
              options: require('../configs/postcss.config')(webpack)
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[md5:contenthash:hex:10].css',
      allChunks: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new workboxPlugin.GenerateSW()
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};
