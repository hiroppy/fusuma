'use strict';

function babelrc({ languages = [], plugins = [], theme = 'default' } = {}) {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: 'last 1 version'
          },
          modules: false,
          useBuiltIns: 'usage',
          corejs: {
            version: 3,
            proposals: true
          },
          debug: true
        }
      ],
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      [
        'prismjs',
        {
          languages,
          plugins,
          theme,
          css: !!languages.length
        }
      ]
    ],
    compact: true
  };
}

module.exports = babelrc;
