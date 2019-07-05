import React, { useEffect, memo } from 'react';
import Reveal from 'reveal.js';
import Prism from 'prismjs';
import classnames from 'classnames';

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

export const Base = memo(
  ({ slides, onChangeSlideIndex, hash }) => {
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
      // setTimeout(setupSlides, 0);
      setTimeout(() => {
        Reveal.initialize({
          history: true,
          transition: 'none'
        });
      });
    }

    useEffect(() => {
      if (process.env.SSR) {
        // setupSlides();
        Reveal.initialize({});
      }

      if (process.env.CHART && !mermaid) {
        setupMermaid();
      }

      // Prism.highlightAll();
    }, []);

    return (
      <article id="webslides" className="reveal">
        <div className="slides">
          {slides.map(({ slide: Slide, fusumaProps }, i) => (
            <section
              data-background-color="#f5f5f5"
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
        </div>
      </article>
    );
  },
  (prevProps, nextProps) => prevProps.hash === nextProps.hash
);
