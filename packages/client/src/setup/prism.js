import Prism from 'prismjs';

import(/* webpackPreload: true */ '../../assets/style/code.css');

// check https://github.com/PrismJS/prism/issues/1487
Prism.highlightAll();

export { Prism };
