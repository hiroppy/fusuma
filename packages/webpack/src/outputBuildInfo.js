'use strict';

const { table, getBorderCharacters } = require('table');
const humanSize = require('human-size');

function outputBuildInfo(res) {
  const output = [];
  const options = {
    border: getBorderCharacters('void')
  };

  Object.entries(res.compilation.assets).forEach(([name, asset]) => {
    output.push([name, humanSize(asset.size())]);
  });

  console.log(table([['name', 'size'], ...output], options));
}

module.exports = outputBuildInfo;
