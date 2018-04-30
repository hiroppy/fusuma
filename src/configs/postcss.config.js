'use strict';

/**
 * packages
 *
 * - postcss-cssnext
 *   - autoprefixer
 */

const common = {
  plugins: [require('postcss-import'), require('postcss-mixins'), require('postcss-cssnext')]
};

const devConfig = (webpack) => {
  return {
    plugins: [...common.plugins, require('postcss-reporter'), require('postcss-browser-reporter')]
  };
};

const prodConfig = (webpack) => common;

module.exports = process.env.NODE_ENV !== 'production' ? devConfig : prodConfig;
