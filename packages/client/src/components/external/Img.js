import React from 'react';

export const Img = ({ src, children, overlay = true }) => (
  <figure>
    {overlay ? <div className="overlay">{children}</div> : <figcaption>{children}</figcaption>}
    <img src={src} />
  </figure>
);
