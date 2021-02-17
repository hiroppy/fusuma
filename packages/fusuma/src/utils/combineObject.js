'use strict';

const { all: mergeAll } = require('deepmerge');

function combineObject(...objects) {
  const overwriteMerge = (destinationArray, sourceArray) => sourceArray;

  return mergeAll([...objects], { arrayMerge: overwriteMerge });
}

module.exports = combineObject;
