import 'reveal.js/css/reveal.css';
import '../../css/base.css';

if (process.env.THEME === 'fusuma') {
  require('../../fusuma-theme/style.css');
} else {
  require(`reveal.js/css/theme/${process.env.THEME}.css`);
}
