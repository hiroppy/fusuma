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
    loop: false,
    targetBlank: true,
    ui: {
      sidebar: true,
      vertical: false,
      pagination: null, // bullets | progressbar | fraction
      effect: null, // fade | cube | flip
    },
    code: {
      plugins: [],
      theme: 'default',
    },
    chart: false,
    math: false,
  },
  extends: {
    js: null,
    css: './style.css',
    webpack: null,
  },
  build: {
    useCache: true,
    publicPath: '',
  },
};

module.exports = config;
