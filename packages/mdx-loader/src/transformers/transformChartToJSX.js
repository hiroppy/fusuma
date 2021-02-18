'use strict';

const { htmlEscape } = require('escape-goat');

function transformChartToJSX(mermaidId, value) {
  const escapedValue = htmlEscape(value.replace(/ {4}/g, ''));

  return {
    type: 'jsx',
    value: `<div className="mermaid" id="mermaid-${mermaidId}" data-value="${escapedValue}" style={{ visibility: 'hidden'}} />`,
  };
}

module.exports = transformChartToJSX;
