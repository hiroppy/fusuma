import React, { useEffect, memo } from 'react';
import { SlideCore } from '../SlideCore';
import { createVMEnv } from '../../utils/createVMEnv';
import { getSearchParams } from '../../utils/getSearchParams';
import { useMermaid } from '../../hooks/useMermaid';

export const Base = memo(
  ({ slides, onChangeSlideIndex, hash }) => {
    const [mermaid] = useMermaid();

    if (import.meta.webpackHot) {
      useEffect(() => {
        (async () => {
          const { Prism } = await import('../../setup/prism');

          if (process.env.CHART) {
            mermaid?.reload();
          }
          Prism.highlightAll();
        })();
      }, [hash]);
    }

    useEffect(() => {
      // don't run when creating html
      if (!getSearchParams().get('ssr')) {
        import(/* webpackMode: "eager"  */ '../../setup/prism');
      }
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
