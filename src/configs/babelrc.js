'use strict';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: 'last 1 version'
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ],
  compact: true
};
