import React, { useEffect, memo } from 'react';
import classnames from 'classnames';
import { setup as setupWebSlides } from '../../setup/webSlides';
import { createVMEnv } from '../../utils/createVMEnv';
import { getSearchParams } from '../../utils/getSearchParams';

const articleClass = process.env.IS_VERTICAL ? 'vertical' : undefined;
let mermaid = null;

function reloadChart() {
  if (mermaid) {
    mermaid.reload();
  }
}

async function setupMermaid() {
  const { Mermaid } = await import('../../setup/Mermaid');

  mermaid = new Mermaid();
  mermaid.init();
}

export const Base = memo(
  ({ slides, onChangeSlideIndex, hash, showIndex }) => {
    if (import.meta.webpackHot) {
      useEffect(() => {
        (async () => {
          const { Prism } = await import(/* webpackPreload: true */ '../../setup/prism');

          if (process.env.CHART) {
            reloadChart();
          }
          Prism.highlightAll();
        })();
      }, [hash]);
    }

    useEffect(() => {
      setupSlides();

      if (!getSearchParams().get('ssr')) {
        // don't run when creating html
        import(/* webpackPreload: true */ '../../setup/prism');
      }
      if (slides.some(({ fusumaProps }) => !!fusumaProps.hasExecutableCode)) {
        createVMEnv();
      }
      if (process.env.CHART && !mermaid) {
        setupMermaid();
      }
    }, []);

    function setupSlides() {
      if (!window.slide) {
        window.slide = setupWebSlides({ showIndex });

        // for presenter:view
        window.slide.el.addEventListener('ws:slide-change', (e) => {
          if (process.env.CHART) {
            reloadChart();
          }
          if (onChangeSlideIndex) {
            onChangeSlideIndex(e.detail.currentSlide0);
          }
        });
      }
    }

    return (
      <article className={articleClass} id="webslides">
        {slides.map(({ slide: Slide, fusumaProps }, i) => (
          <section
            key={i /* mdx-loaderでhash作成 */}
            className={classnames(
              'aligncenter',
              fusumaProps.classes,
              fusumaProps.sectionTitle ? 'section-title' : undefined
            )}
          >
            <Slide />
          </section>
        ))}
      </article>
    );
  },
  (prevProps, nextProps) => prevProps.hash === nextProps.hash
);
