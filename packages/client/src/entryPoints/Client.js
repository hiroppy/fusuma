import { render, hydrate } from 'react-dom';
import { fetchSlides } from '../utils/fetchSlides';
import { setTargetBlank } from '../utils/targetBlank';
import { AppContainer } from '../components/AppContainer';
import { getSearchParams } from '../utils/getSearchParams';
import '../setup/css';

function createBody(slides = [], hash = 0) {
  const renderMethod = import.meta.webpackHot ? render : hydrate;

  renderMethod(<AppContainer slides={slides} hash={hash} />, document.getElementById('root'));
}

let slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH, true, /\.mdx?$/));

import.meta.webpackHot?.accept(slidesInfo.id, () => {
  slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH, true, /\.mdx?$/));
  createBody(slidesInfo.slides, Math.random());
});

createBody(slidesInfo.slides);

if (process.env.TARGET_BLANK) {
  setTargetBlank();
}

if (process.env.NODE_ENV !== 'production') {
  const params = getSearchParams();

  if (params.get('reference') !== 'false') {
    (async () => {
      // for tree shaking
      const { Assistant } = await import('../components/Assistant');
      const el = document.createElement('div');

      el.style.position = 'absolute';
      el.style.top = 0;
      el.style.width = '100%';
      el.style.zIndex = 10000;
      el.setAttribute('id', 'reference');
      document.body.appendChild(el);

      render(<Assistant />, document.getElementById('reference'));
    })();
  }
}
