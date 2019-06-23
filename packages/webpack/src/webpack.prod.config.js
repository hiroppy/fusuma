'use strict';

function prod() {
  const webpack = require('webpack');
  // const workboxPlugin = require('workbox-webpack-plugin');
  const TerserPlugin = require('terser-webpack-plugin');
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
  const css = require('./css');

  return {
    mode: 'production',
    output: {
      filename: '[name].[chunkhash].bundle.js',
      chunkFilename: '[name].[id].[chunkhash].bundle.js'
    },
    module: {
      rules: [css('prod')]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash].css',
        chunkFilename: '[name].[id].[chunkhash].css'
      })
      // new webpack.optimize.AggressiveMergingPlugin(),
      // new workboxPlugin.GenerateSW()
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            safe: true,
            discardComments: {
              removeAll: true
            }
          }
        })
      ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'initial',
            enforce: true
          }
        }
      },
      runtimeChunk: 'single'
    }
  };
}

module.exports = prod;
