import React from 'react';

export const ToC = ({ list }) => () => (
  <div className="toc size-70 aligncenter">
    <ol>
      {list.map(({ index, title }, i) => (
        <li key={i /* fix */}>
          <a href={`#slide=${index}`} title={title}>
            <span className="chapter">{title}</span>
            <span className="toc-page">{index}</span>
          </a>
        </li>
      ))}
    </ol>
  </div>
);
