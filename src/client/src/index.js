import { createBody } from './utils/createBody';
import { fetchSlides } from './utils/fetchSlides';
import './setup/css';

// TODO: maybe need to use production path...
// if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js');
// }

(async () => {
  const slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH, false, /\.md$/));

  createBody(slidesInfo.slides);

  if (process.env.TARGET_BLANK) {
    const { setTargetBlank } = await import(
      /* webpackPreload: true, webpackChunkName: "target-blank" */ './utils/targetBlank'
    );

    setTargetBlank();
  }
})();
