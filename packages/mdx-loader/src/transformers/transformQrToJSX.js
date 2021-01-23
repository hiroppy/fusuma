'use strict';

const qr = require('qrcode-generator');

function transformQrToJSX(attr) {
  if (['http', 'https'].includes(attr[0])) {
    const url = `${attr[0]}:${attr[1]}`;
    const q = qr(0, 'L');
    q.addData(url);
    q.make();
    const svg = q.createSvgTag();

    return {
      type: 'jsx',
      value: svg
        .replace('width="58px"', '')
        .replace('height="58px"', '')
        .replace('<svg ', '<svg className="qr"'),
    };
  }
  throw new Error('Invalid URL');
}

module.exports = transformQrToJSX;
