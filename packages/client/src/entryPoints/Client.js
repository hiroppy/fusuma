import React from 'react';
import { render, hydrate } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { SlidesProvider } from '../context/slides';
import { fetchSlides } from '../utils/fetchSlides';
import { AppContainer } from '../components/AppContainer';
import { getSearchParams } from '../utils/getSearchParams';
import { createSlidesProps } from '../utils/createSlidesProps';
import { theme } from '../theme/global';
import '../setup/css';

function createBody(slides = []) {
  const renderMethod = import.meta.webpackHot ? render : hydrate;

  renderMethod(
    <SlidesProvider>
      <ChakraProvider theme={theme}>
        <AppContainer slidesProps={createSlidesProps(slides)} />
      </ChakraProvider>
    </SlidesProvider>,
    document.getElementById('root')
  );
}

let slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH, true, /\.mdx?$/));

import.meta.webpackHot?.accept(slidesInfo.id, () => {
  slidesInfo = fetchSlides(require.context(process.env.SLIDE_PATH, true, /\.mdx?$/));
  createBody(slidesInfo.slides);
});

createBody(slidesInfo.slides);

if (process.env.NODE_ENV !== 'production') {
  const params = getSearchParams();

  if (params.get('reference') !== 'false') {
    (async () => {
      // for tree shaking
      const { Assistant } = await import('../components/Assistant');
      const el = document.createElement('div');

      el.style.position = 'absolute';
      el.style.top = 0;
      el.style.width = '100%';
      el.style.zIndex = 10000;
      el.setAttribute('id', 'reference');
      document.body.appendChild(el);

      render(<Assistant />, document.getElementById('reference'));
    })();
  }
}
