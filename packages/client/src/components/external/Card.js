import React from 'react';
import cx from 'classnames';

const createElement = (elm) => {
  if (elm.props.mdxType === 'img') {
    return <figure>{elm}</figure>;
  } else {
    return <div className="flex-content">{elm}</div>;
  }
};

export const Card = ({ left, right, className }) => (
  <div className={cx('card-50', className)}>
    {left && createElement(left)}
    {right && createElement(right)}
  </div>
);
