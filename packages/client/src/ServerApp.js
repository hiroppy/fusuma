import React from 'react';
import { renderToString } from 'react-dom/server';
import { AppContainer } from './components/AppContainer';
import { fetchSlides } from './utils/fetchSlides';

let fusumaProps = [];

export class ServerApp extends React.Component {
  constructor(props) {
    super(props);

    const slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH, true, /\.mdx?$/));

    this.slides = slidesInfo.slides;
    this.hash = 0;

    fusumaProps = this.slides.map((slide) => {
      return slide.fusumaProps;
    });
  }

  render() {
    return <AppContainer slides={this.slides} hash={this.hash} />;
  }
}

// react-hooks requires a same react file
// the cause is `node_modules link` so set resolve.alias in build.js
// https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react
export function render(elm) {
  return renderToString(elm);
}

export function getFusumaProps() {
  return fusumaProps;
}
