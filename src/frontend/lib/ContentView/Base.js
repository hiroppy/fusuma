/* eslint-disable  react/prop-types */

import React from 'react';

const Base = ({ slides, currentIndex }) => (
  <article>
    {slides.map((slide, i) => (
      <section
        key={i /* fix */}
        className={slide.meta.className}
        data-bespoke-backdrop={slide.meta.background}
        data-bespoke-fx-direction={slide.meta.fx.direction}
        data-bespoke-fx-transition={slide.meta.fx.transition}
        dangerouslySetInnerHTML={{
          __html: i + 1 < currentIndex + 5 ? slide.context : '<div />'
        }}
      />
    ))}
  </article>
);

export default Base;
