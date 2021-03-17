'use strict';

/* prettier-ignore */

const config = {
  meta: {
    url: null,          // a URL you want to deploy slides
    title: null,        // a title for OGP
    siteName: null,     // a site name for OGP
    thumbnail: null,    // a thumbnail for OGP, if null, fusuma will generate automatically
    description: null,  // a description for OGP
    sns: ['twitter'],   // add share buttons on sidebar
  },
  slide: {
    loop: false,        // loop slides or not
    targetBlank: true,  // add a target attr to <a> automatically
    ui: {
      sidebar: true,    // show sidebar or not
      vertical: false,  // set scroll vertical or not
      pagination: null, // set pagination UI (bullets | progressbar | fraction)
      effect: null,     // set page animation (fade | cube | flip)
    },
    code: {             // fusuma uses prism.js for syntax highlight, see https://prismjs.com
      plugins: [],      // add prism.js plugins
      theme: 'default', // set color theme
    },
    chart: false,       // fusuma uses mermaid, see https://mermaid-js.github.io/mermaid/#/
    math: false,        // use mathjax or not
  },
  extends: {
    js: null,           // set js path to load by fusuma
    css: './style.css', // set css path to load by fusuma
    webpack: null,      // set webpack.config.js path to load by fusuma
  },
  build: {
    useCache: true,     // use webpack's persistent cache or not
    publicPath: '/',    // set publicPath for production build
  },
};

module.exports = config;
