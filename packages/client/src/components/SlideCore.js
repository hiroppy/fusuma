import React, { useEffect } from 'react';
import classnames from 'classnames';
import { Prism } from '../setup/prism';
import { getSearchParams } from '../utils/getSearchParams';
import { createVMEnv } from '../utils/createVMEnv';
import { useSlides } from '../context/slides';
import { useMermaid } from '../hooks/useMermaid';

export const SlideCore = (props) => {
  const {
    state: { slides, currentIndex },
  } = useSlides();
  const [mermaid] = useMermaid();
  const { slide: Slide, fusumaProps } = slides[currentIndex];

  if (import.meta.webpackHot) {
    setTimeout(() => {
      if (process.env.CHART) {
        mermaid?.reload();
      }
      Prism.highlightAll();
    }, 0);
  }

  useEffect(() => {
    Prism.highlightAll();

    if (slides.some(({ fusumaProps }) => !!fusumaProps.hasExecutableCode)) {
      createVMEnv();
    }
    if (process.env.CHART) {
      mermaid?.reload();
    }
  }, []);

  return (
    <div
      className={classnames(
        'slide-box',
        fusumaProps.classes,
        fusumaProps.sectionTitle ? 'section-title' : undefined
      )}
    >
      {fusumaProps.background && (
        <div className="slide-background" style={fusumaProps.background} />
      )}
      <div className="slide-internal-box">
        <Slide />
      </div>
    </div>
  );
};
