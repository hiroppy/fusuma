import React from 'react';
import { render, hydrate } from 'react-dom';
import { fetchSlides } from '../utils/fetchSlides';
import { setTargetBlank } from '../utils/targetBlank';
import { AppContainer } from '../components/AppContainer';
import '../setup/css';

function createBody(slides = [], hash = 0) {
  const renderMethod = module.hot ? render : hydrate;

  renderMethod(<AppContainer slides={slides} hash={hash} />, document.getElementById('root'));
}

(async () => {
  let slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH, true, /\.mdx?$/));

  if (module.hot) {
    module.hot.accept(slidesInfo.id, () => {
      slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH, true, /\.mdx?$/));
      createBody(slidesInfo.slides, Math.random());
    });
  }

  createBody(slidesInfo.slides);

  if (process.env.TARGET_BLANK) {
    setTargetBlank();
  }
})();
