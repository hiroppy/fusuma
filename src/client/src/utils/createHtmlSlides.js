import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { parseAttrs } from './parseAttrs';

export function createHtmlSlides(arr) {
  const res = [];
  const slides = divideSlides(arr);
  const contentsList = [];

  slides.forEach((slide, i) => {
    const meta = parseAttrs(slide);

    res.push({
      meta,
      context: slide
    });

    if (meta.sectionTitle !== '') {
      contentsList.push({
        title: meta.sectionTitle,
        index: i + 1
      });
    }
  });

  if (contentsList.length !== 0) {
    res.forEach((e, i) => {
      if (e.meta.shouldReplace) {
        res[i].context = insertContentsList(e.context, contentsList);
      }
    });
  }

  return {
    slides: res,
    contentsList
  };
}

function divideSlides(slides) {
  const res = [];

  slides.forEach((slide) => {
    res.push(...slide.split('<hr>'));
  });

  return res;
}

function insertContentsList(content, list) {
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
