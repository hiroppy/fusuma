import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

export function insertContentsList(content, list) {
  const html = (
    <ul className="contents">
      {list.map((e, i) => (
        <li key={i}>
          <a href={`#${e.index}`}>{e.title}</a>
        </li>
      ))}
    </ul>
  );

  return content.replace(/<!-- contents -->/, reactElementToJSXString(html));
}
