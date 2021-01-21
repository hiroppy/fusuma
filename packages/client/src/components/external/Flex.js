import React from 'react';
import cx from 'classnames';

export const Flex = ({ items = [], className }) => (
  <ul className={cx('flexblock', className)}>
    {items.map((item, i) => (
      <li key={i /* TODO: fix */}>{item}</li>
    ))}
  </ul>
);
