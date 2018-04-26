'use strict';

/**
 * packages
 *
 * - postcss-cssnext
 *   - autoprefixer
 * - postcss-smart-import
 *   - postcss-import
 *   - postcss-url
 *   - postcss-assets
 */

const devConfig = (webpack) => {
  return {
    plugins: [
      require('postcss-reporter'),
      require('postcss-browser-reporter'),
      require('postcss-smart-import')({ addDependencyTo: webpack }),
      require('postcss-mixins'),
      require('postcss-cssnext')
    ]
  };
};

const prodConfig = (webpack) => {
  return {
    plugins: [
      require('postcss-smart-import')({ addDependencyTo: webpack }),
      require('postcss-mixins'),
      require('postcss-cssnext')
    ]
  };
};

module.exports = process.env.NODE_ENV !== 'production' ? devConfig : prodConfig;
