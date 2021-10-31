'use strict';

const config = {
  meta: {
    url: null,
    title: null,
    siteName: null,
    thumbnail: null,
    description: null,
    sns: ['twitter'], // twitter
  },
  slide: {
    targetBlank: true,
    code: {
      plugins: [],
      theme: 'default',
    },
    chart: false,
    math: false,
    ui: {
      sidebar: true,
      colorScheme: 'green',
      defaultBackground: '',
      defaultTitleTag: 'h2',
    },
  },
  extends: {
    js: null,
    css: './style.css',
    webpack: null,
  },
  build: {
    useCache: true,
    publicPath: '/',
  },
};

module.exports = config;
