'use strict';

function commentParser(text) {
  const [p, ...rest] = text.trim().split(':');
  const [prefix, ...context] = p.split('\n');
  const attr = rest.map((r) => r.trim());
  const res = {
    prefix,
    valueArr: attr,
    valueStr: attr.join(''),
  };

  // e.g. note
  if (context.length) {
    res.valueArr = context;
    res.valueStr = context.join('\n');
  } else if (attr.length && attr[0].includes(',')) {
    res.valueArr = attr[0].split(',').map((v) => v.trim());
    res.valueStr = res.valueArr.join(',');
  }

  return res;
}

module.exports = commentParser;
