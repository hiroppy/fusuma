import { createBody } from './utils/createBody';
import { fetchSlides } from './utils/fetchSlides';
import './setup/css';

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
    const { setTargetBlank } = await import(
      /* webpackPreload: true, webpackChunkName: "target-blank" */ './utils/targetBlank'
    );

    setTargetBlank();
  }
})();
