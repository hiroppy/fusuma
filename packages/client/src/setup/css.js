import 'reveal.js/css/reveal.css';

if (process.env.THEME === 'fusuma') {
  require('../../assets/style/common.css');
} else {
  require(`reveal.js/css/theme/${process.env.THEME}.css`);
}
