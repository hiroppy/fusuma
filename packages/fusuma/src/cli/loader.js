'use strict';

const ora = require('ora');

function loader(text) {
  const spinner = ora(text);

  return spinner;
}

module.exports = loader;
