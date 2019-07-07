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
          modules: false
          // we cannot use useBuiltIns option
          // https://github.com/webpack/webpack/issues/4039
        }
      ],
      '@babel/preset-react'
    ],
    plugins: [
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
