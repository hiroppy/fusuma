'use strict';

const postcssConfig = require('../configs/postcss.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = 'dev') => {
  return {
    test: /\.css$/,
    use: [
      env === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader,
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
  };
};
