import React from 'react';
import classnames from 'classnames';
import SwiperCore, {
  A11y,
  Pagination,
  Keyboard,
  HashNavigation,
  EffectCube,
  EffectFlip,
  EffectFade,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const swiperComponents = [A11y, Keyboard, HashNavigation];

// TODO: check if the url has a param like pagination=true for thumbnail
if (process.env.UI.PAGINATION) {
  swiperComponents.push(Pagination);
  import('swiper/components/pagination/pagination.min.css');
}

if (process.env.UI.EFFECT === 'fade') {
  swiperComponents.push(EffectFade);
  import('swiper/components/effect-fade/effect-fade.min.css');
} else if (process.env.UI.EFFECT === 'cube') {
  swiperComponents.push(EffectCube);
  import('swiper/components/effect-cube/effect-cube.min.css');
} else if (process.env.UI.EFFECT === 'flip') {
  swiperComponents.push(EffectFlip);
  import('swiper/components/effect-flip/effect-flip.min.css');
}

SwiperCore.use(swiperComponents);

export const SlideCore = ({ slides, onChangeSlideIndex }) => (
  <Swiper
    effect={process.env.UI.EFFECT}
    direction={process.env.VERTICAL === 'true' ? 'vertical' : 'horizontal'}
    loop={/*TODO: respect to params to generate pdf */ process.env.LOOP}
    speed={350}
    allowTouchMove={/* TODO: only for mobile */ false}
    slidesPerView={1}
    keyboard={{ enabled: true }}
    hashNavigation={{
      watchState: true,
    }}
    pagination={{
      ...(process.env.UI.PAGINATION
        ? {
            type: process.env.UI.PAGINATION,
            clickable: true,
          }
        : {}),
    }}
    onSlideChange={({ realIndex }) => onChangeSlideIndex(realIndex)}
  >
    {slides.map(({ slide: Slide, fusumaProps }, i) => (
      <SwiperSlide
        key={i /* mdx-loaderでhash作成 */}
        className={classnames(
          'slide-box',
          'slide-background',
          fusumaProps.classes,
          fusumaProps.sectionTitle ? 'section-title' : undefined
        )}
        data-hash={`slide-${i + 1}`}
      >
        <div className="slide-internal-box slide-background">
          <Slide />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);
