'use strict';

function babelrc() {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['> 2%'],
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
          runtime: 'automatic',
          // development: true,
        },
      ],
    ],
    compact: true,
  };
}

module.exports = babelrc;
