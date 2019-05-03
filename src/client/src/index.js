import { createBody } from './utils/createBody';
import { fetchSlides } from './utils/fetchSlides';
import './setup/css';

// TODO: maybe need to use production path...
// if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js');
// }

(async () => {
  const { default: theme } = await import(/* webpackChunkName: "theme" */ process.env.THEME);
  const slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH));

  createBody(slidesInfo.slides, theme);

  if (process.env.TARGET_BLANK) {
    const {
      setTargetBlank
    } = await import(/* webpackPreload: true, webpackChunkName: "target-blank" */ './utils/targetBlank');

    setTargetBlank();
  }
})();
