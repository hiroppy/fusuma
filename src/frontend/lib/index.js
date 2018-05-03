import nebula from 'bespoke-theme-nebula';
import createBody from './create-body';
import fetchSlides from './fetch-slides';
import './setup-default';

if (process.env.THEME === 'js') {
  try {
    require('../assets/style/themes/javascript.css');
  } catch (e) {
    console.error(e);
  }
}

if (process.env.CSS_PATH && process.env.CSS_PATH.match(/\+*.css$/i)) {
  try {
    require(process.env.CSS_PATH);
  } catch(e) {
    console.error(e);
  }
}

const slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH));

createBody(slidesInfo.slides, nebula);
