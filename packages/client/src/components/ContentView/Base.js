import React, { useEffect, memo } from 'react';
import classnames from 'classnames';
import SwiperCore, { A11y, Navigation, Pagination, Keyboard, HashNavigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { createVMEnv } from '../../utils/createVMEnv';
import { getSearchParams } from '../../utils/getSearchParams';
import { useMermaid } from '../../hooks/useMermaid';

const articleClass = process.env.IS_VERTICAL ? 'vertical' : undefined;

// don't move to useEffect
if (!getSearchParams().get('ssr')) {
  // don't run when creating html
  import(/* webpackPreload: true  */ '../../setup/prism');
}

SwiperCore.use([Pagination, A11y, Keyboard, HashNavigation]);

export const Base = memo(
  ({ slides, onChangeSlideIndex, hash, showIndex }) => {
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
      if (slides.some(({ fusumaProps }) => !!fusumaProps.hasExecutableCode)) {
        createVMEnv();
      }
      if (process.env.CHART) {
        mermaid?.reload();
      }
    }, []);

    return (
      <Swiper
        loop={false}
        speed={350}
        allowTouchMove={/* TODO: only for mobile */ false}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        hashNavigation={{
          watchState: true,
        }}
        onSlideChange={({ realIndex }) => onChangeSlideIndex(realIndex)}
      >
        {slides.map(({ slide: Slide, fusumaProps }, i) => (
          <SwiperSlide
            key={i /* mdx-loaderでhash作成 */}
            className={classnames(
              fusumaProps.classes,
              fusumaProps.sectionTitle ? 'section-title' : undefined
            )}
            data-hash={`slide-${i}`}
          >
            <div className="slide-box">
              <Slide />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  },
  (prevProps, nextProps) => prevProps.hash === nextProps.hash
);
