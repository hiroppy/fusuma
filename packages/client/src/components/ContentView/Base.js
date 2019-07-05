import React, { useEffect, memo } from 'react';
import Prism from 'prismjs';
import classnames from 'classnames';

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
  ({ slides, hash }) => {
    // for SSR
    if (process.env.NODE_ENV !== 'production') {
      useEffect(() => {
        if (process.env.CHART) {
          reloadChart();
        }

        Prism.highlightAll();
      }, [hash]);
    }

    useEffect(() => {
      if (process.env.CHART && !mermaid) {
        setupMermaid();
      }

      Prism.highlightAll();
    }, []);

    return (
      <article className="reveal">
        <div className="slides">
          {slides.map(({ slide: Slide, fusumaProps }, i) => (
            <section
              key={i}
              className={classnames(
                'aligncenter',
                fusumaProps.classes,
                fusumaProps.sectionTitle ? 'section-title' : undefined
              )}
              {...JSON.parse(fusumaProps.background || '{}')}
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
