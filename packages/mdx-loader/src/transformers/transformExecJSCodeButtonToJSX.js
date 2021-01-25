'use strict';

// add display:none to here, not css
function transformExecJSCodeButtonToJSX(value) {
  const strip = require('strip-comments');

  return {
    type: 'jsx',
    value: `<div className="executable-code-container">
      <a data-value="${strip(value)}" className="executable-code-button">execute</a>
      <div className="executable-code-result" style={{ display: 'none' }}></div>
    </div>`,
  };
}

module.exports = transformExecJSCodeButtonToJSX;
