import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import classnames from 'classnames';
import SwiperCore, { Virtual, Mousewheel } from 'swiper';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useSlides, updateCurrentIndex } from '../context/slides';
import '../../assets/style/slidesList.css';

if (process.env.NODE_ENV === 'development') {
  SwiperCore.use([Virtual, Mousewheel]);
}

export const SlideList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {
    state: { slides },
    dispatch,
  } = useSlides();
  const onClick = () => {
    setIsOpen(!isOpen);

    const { swiper } = document.querySelector('#main-slides');

    setTimeout(() => {
      swiper.resize.resizeHandler();
    }, 250);
  };

  return (
    <div
      className={classnames(
        'slides-list-container',
        isOpen ? 'slide-list-open' : 'slide-list-close'
      )}
    >
      <span className="slides-list-toggle" onClick={onClick}>
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </span>
      <Swiper direction="vertical" mousewheel slidesPerView="auto">
        {slides.map(({ slide: Slide, fusumaProps: { classes, sectionTitle, background } }, i) => (
          <SwiperSlide
            key={i /* mdx-loaderでhash作成 */}
            className={classnames(
              classes,
              sectionTitle ? 'section-title' : undefined,
              'slide-list-overlay'
            )}
            onClick={(e) => {
              e.preventDefault();
              dispatch(updateCurrentIndex(i));
            }}
          >
            {background && <div className="slide-background" style={background} />}
            <div className="slide-internal-box">
              <Slide />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
