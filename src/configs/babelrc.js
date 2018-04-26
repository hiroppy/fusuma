'use strict';

module.exports = {
  presets: [
    [
      'env',
      {
        modules: false,
        targets: {
          browsers: 'last 1 version'
        }
      }
    ],
    'react',
    'stage-1'
  ],
  compact: true
};
