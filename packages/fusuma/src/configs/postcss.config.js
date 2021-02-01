'use strict';

const common = {
  postcssOptions: {
    plugins: [
      require('postcss-import'),
      require('postcss-url'),
      require('postcss-preset-env')({
        stage: 0,
      }),
    ],
  },
};

const devConfig = () => {
  return {
    postcssOptions: {
      plugins: [...common.postcssOptions.plugins, require('postcss-reporter')],
    },
  };
};

const prodConfig = () => common;

module.exports = process.env.NODE_ENV !== 'production' ? devConfig : prodConfig;
