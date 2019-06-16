import React from 'react';

export const ToC = ({ list }) => () => (
  <div class="toc size-70 aligncenter">
    <ol>
      {list.map(({ index, title }, i) => (
        <li key={i /* fix */}>
          <a href={`#slide=${index}`} title={title}>
            <span class="chapter">{title}</span>
            <span class="toc-page">{index}</span>
          </a>
        </li>
      ))}
    </ol>
  </div>
);
