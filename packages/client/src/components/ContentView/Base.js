import React, { useEffect, memo } from 'react';
import Prism from 'prismjs';
import classnames from 'classnames';
import { setup as setupWebSlides } from '../../setup/webSlides';

const articleClass = process.env.IS_VERTICAL ? 'vertical' : undefined;
let mermaid = null;

function reloadChart() {
  if (mermaid) {
    mermaid.reload();
  }
}

async function setupMermaid() {
  const { Mermaid } = await import(/* webpackChunkName: 'Mermaid' */ '../../setup/Mermaid');

  mermaid = new Mermaid();
  mermaid.init();
}

export const Base = memo(
  ({ slides, onChangeSlideIndex, hash, isJumpPage }) => {
    // for SSR
    if (process.env.NODE_ENV !== 'production') {
      useEffect(() => {
        if (process.env.CHART) {
          reloadChart();
        }

        Prism.highlightAll();
      }, [hash]);
    }

    // useEffect is called too late
    // delay Event Loop one round
    // but on Node.js this line is an error, so put it in useEffect
    if (!process.env.SSR) {
      // 0 page
      if (process.env.NODE_ENV === 'production' && !isJumpPage) {
        setupSlides();
        Prism.highlightAll();
      } else {
        setTimeout(() => {
          setupSlides();
          Prism.highlightAll();
        }, 0);
      }
    }

    useEffect(() => {
      if (process.env.SSR) {
        setupSlides();
      }

      if (process.env.CHART && !mermaid) {
        setupMermaid();
      }
    }, []);

    function setupSlides() {
      if (!window.slide) {
        window.slide = setupWebSlides({});

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
            key={i}
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
