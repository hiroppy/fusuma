import { createBody } from './utils/createBody';
import { fetchSlides } from './utils/fetchSlides';
import './setup/css';

(async () => {
  let slidesInfo;

  // slides have already reloaded because slides are inserted in HTML
  // if (process.env.NODE_ENV === 'production') {
  //   // TODO: use local values
  //   const initialData = JSON.parse(
  //     document.getElementById('initial-data').getAttribute('data-json')
  //   );
  //   slidesInfo = {
  //     slides: initialData
  //   };
  // } else {
  //   slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH, true, /\.mdx?$/));
  // }

  slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH, true, /\.mdx?$/));

  if (module.hot) {
    module.hot.accept(slidesInfo.id, () => {
      slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH, true, /\.mdx?$/));
      createBody(slidesInfo.slides, Math.random());
    });
  }

  createBody(slidesInfo.slides);

  if (process.env.TARGET_BLANK) {
    const { setTargetBlank } = await import(
      /* webpackPreload: true, webpackChunkName: "target-blank" */ './utils/targetBlank'
    );

    setTargetBlank();
  }
})();
