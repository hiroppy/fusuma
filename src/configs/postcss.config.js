'use strict';

/**
 * packages
 *
 * - postcss-cssnext
 *   - autoprefixer
 */

const devConfig = (webpack) => {
  return {
    plugins: [
      require('postcss-reporter'),
      require('postcss-browser-reporter'),
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-cssnext')
    ]
  };
};

const prodConfig = (webpack) => {
  return {
    plugins: [require('postcss-import'), require('postcss-mixins'), require('postcss-cssnext')]
  };
};

module.exports = process.env.NODE_ENV !== 'production' ? devConfig : prodConfig;
