import React, { memo, useEffect, useRef } from 'react';
import { useSlides, updateCurrentIndex } from '../../context/slides';
import { SlideCore } from '../SlideCore';

export const Base = memo(() => {
  const {
    state: { currentIndex },
    dispatch,
  } = useSlides();
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    // TODO: swiper should be gone to context
    const { swiper } = document.querySelector('.swiper-container');
    swiper?.slideTo(currentIndex);
  }, [currentIndex]);

  const keyboardListener = ({ key }) => {
    if (key === 'ArrowRight') {
      dispatch(updateCurrentIndex('+'));
    } else if (key === 'ArrowLeft') {
      dispatch(updateCurrentIndex('-'));
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      (async () => {
        // const { swipeEvent } = await import('../../utils/swipeEvent');
        // swipeEvent();
      })();
    }

    document.addEventListener('keydown', keyboardListener);

    return () => {
      document.removeEventListener('keydown', keyboardListener);
    };
  }, []);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  return <SlideCore />;
});
