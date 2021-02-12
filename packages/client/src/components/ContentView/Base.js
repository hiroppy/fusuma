import React, { memo, useEffect } from 'react';
import { useSlides, updateCurrentIndex } from '../../context/slides';
import { SlideCore } from '../SlideCore';

export const Base = memo(() => {
  const {
    state: { currentIndex },
    dispatch,
  } = useSlides();

  useEffect(() => {
    // TODO: swiper should be gone to context
    const { swiper } = document.querySelector('.swiper-container');
    swiper?.slideTo(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const keyboardListener = ({ key }) => {
      if (key === 'ArrowRight') {
        dispatch(updateCurrentIndex('+'));
      } else if (key === 'ArrowLeft') {
        dispatch(updateCurrentIndex('-'));
      }
    };

    document.addEventListener('keydown', keyboardListener);

    return () => {
      document.removeEventListener('keydown', keyboardListener);
    };
  }, []);

  return <SlideCore />;
});
