'use strict';

const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

function prod() {
  return {
    mode: 'production',
    output: {
      filename: '[name].[chunkhash].bundle.js',
      chunkFilename: '[name].[chunkhash].bundle.js',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash].css',
        chunkFilename: '[name].[chunkhash].css',
      }),
      // github pages doesn't support brotli
      new CompressionPlugin({
        test: /\.(js|css|html|svg)$/,
        minRatio: 0.8,
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'initial',
            enforce: true,
          },
        },
      },
      runtimeChunk: 'single',
    },
  };
}

module.exports = prod;
