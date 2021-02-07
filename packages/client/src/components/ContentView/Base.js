import React, { useEffect, memo } from 'react';
import { SlideCore } from '../SlideCore';
import { Prism } from '../../setup/prism';
import { createVMEnv } from '../../utils/createVMEnv';
import { useMermaid } from '../../hooks/useMermaid';

export const Base = memo(
  ({ slides, onChangeSlideIndex, hash }) => {
    const [mermaid] = useMermaid();

    if (import.meta.webpackHot) {
      useEffect(() => {
        if (process.env.CHART) {
          mermaid?.reload();
        }

        Prism.highlightAll();
      }, [hash]);
    }

    useEffect(() => {
      if (slides.some(({ fusumaProps }) => !!fusumaProps.hasExecutableCode)) {
        createVMEnv();
      }
      if (process.env.CHART) {
        mermaid?.reload();
      }
    }, []);

    return <SlideCore slides={slides} onChangeSlideIndex={onChangeSlideIndex} />;
  },
  (prevProps, nextProps) => prevProps.hash === nextProps.hash
);
