import React from 'react';

export const Code = ({ children, language = 'js' }) => (
  <pre className={`language-${language}`}>
    <code>{children}</code>
  </pre>
);
