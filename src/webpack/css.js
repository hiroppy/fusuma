'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = 'dev') => {
  return {
    test: /\.css$/,
    use: [
      env === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader', // dont't use css-modules
      {
        loader: 'postcss-loader',
        options: require('../configs/postcss.config')()
      },
      {
        loader: 'string-replace-loader',
        options: {
          multiple: [
            {
              search: '__body',
              replace: '.bespoke-parent',
              flags: 'g'
            },
            {
              search: '__bg',
              replace: '.bespoke-backdrop',
              flags: 'g'
            },
            {
              search: '__section-title',
              replace: '.bespoke-backdrop.section-title',
              flags: 'g'
            }
          ]
        }
      }
    ]
  };
};
