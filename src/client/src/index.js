import createBody from './create-body';
import fetchSlides from './fetch-slides';
import './setup-default';
import setTargetBlank from './utils/target-blank';

// TODO: maybe need to use production path...
// if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js');
// }

let theme;

try {
  switch (process.env.THEME) {
    case '':
    case 'nebula':
    case 'bespoke-theme-nebula':
      theme = require('bespoke-theme-nebula');
      break;
    case 'voltaire':
    case 'bespoke-theme-voltaire':
      theme = require('bespoke-theme-voltaire');
      break;
    case 'cube':
    case 'bespoke-theme-cube':
      theme = require('bespoke-theme-cube');
      break;
    // default:
    //   theme = require(`${process.env.BASE_PATH}/node_modules/${process.env.THEME}`);
  }
} catch (e) {
  console.error(e);
}

const slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH));

if (theme === undefined) throw new Error('Could not find theme');

createBody(slidesInfo.slides, theme);

if (process.env.TARGET_BLANK) setTargetBlank();
