import parseAttrs from './parse-attrs';
import divideSlides from './divide-slides';
import { insertContentsList } from './replace-html';

function createHtmlSlides(arr) {
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

export default createHtmlSlides;
