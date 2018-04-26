import nebula from 'bespoke-theme-nebula';
import createBody from './create-body';
import fetchSlides from './fetch-slides';
import './setup-default';

if (process.env.THEME === 'js') require('../assets/style/themes/javascript.css');

if (process.env.CSS_PATH && process.env.CSS_PATH.match(/\+*.css$/i)) require(process.env.CSS_PATH);

const slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH));

createBody(slidesInfo.slides, nebula);
