'use strict';

function transformChartToJSX(mermaidId, value) {
  return {
    type: 'jsx',
    value: `<div className="mermaid" id="mermaid-${mermaidId}" data-value="${value.replace(
      / {4}/g,
      ''
    )}" style={{ visibility: 'hidden'}}>${value.replace(/ {4}/g, '')}</div>`,
  };
}

module.exports = transformChartToJSX;
