import React from 'react';

export const Tooltip = ({ children, title }) => (
  <div className="tooltip-container">
    <span className="tooltip">{title}</span>
    {children}
  </div>
);
