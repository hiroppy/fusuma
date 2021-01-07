'use strict';

const common = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-mixins'),
    require('postcss-preset-env')({
      stage: 0
    })
  ]
};

const devConfig = () => {
  return {
    plugins: [...common.plugins, require('postcss-reporter')]
  };
};

const prodConfig = () => common;

module.exports = process.env.NODE_ENV !== 'production' ? devConfig : prodConfig;
