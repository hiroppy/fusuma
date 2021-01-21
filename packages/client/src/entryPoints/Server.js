import React from 'react';
import { renderToString } from 'react-dom/server';
import { AppContainer } from '../components/AppContainer';
import { fetchSlides } from '../utils/fetchSlides';

let fusumaProps = [];

export const Server = () => {
  const { slides } = fetchSlides(require.context(process.env.SLIDE_PATH, true, /\.mdx?$/));

  fusumaProps = slides.map((slide) => {
    return slide.fusumaProps;
  });

  return <AppContainer slides={slides} hash={0} />;
};

// react-hooks requires a same react file
// the cause is `node_modules link` so set resolve.alias in build.js
// https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react
export function render(elm) {
  return renderToString(elm);
}

export function getFusumaProps() {
  return fusumaProps;
}
