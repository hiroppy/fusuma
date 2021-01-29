'use strict';

function babelrc({ languages, plugins = [], theme = 'default' } = {}) {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          // useBuiltIns: 'usage',
          // corejs: 3,
          targets: {
            browsers: 'last 1 version',
          },
          modules: false,
          // we cannot use useBuiltIns option
          // https://github.com/webpack/webpack/issues/4039
        },
      ],
      [
        '@babel/preset-react',
        {
          // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#manual-babel-setup
          // runtime: 'automatic',
        },
      ],
    ],
    plugins: [
      [
        'prismjs',
        {
          languages: [],
          plugins,
          theme,
          css: true,
        },
      ],
    ],
    compact: true,
  };
}

module.exports = babelrc;
