import React from 'react';
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
  const html = `
    <div class="toc size-70 aligncenter">
      <ol>
        ${list
          .map(
            (e, i) => `<li>
            <a href="#slide=${e.index}" title="${e.title}">
              <span class="chapter">${e.title}</span>
              <span class="toc-page">${e.index}</span>
            </a>
          </li>`
          )
          .join('')}
      </ol>
    </div>
  `;

  return content.replace(/<!-- contents -->/, html);
}
