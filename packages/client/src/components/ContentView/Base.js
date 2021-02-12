import React, { memo, useEffect, useRef } from 'react';
import { useSlides, updateCurrentIndex } from '../../context/slides';
import { SlideCore } from '../SlideCore';

export const Base = memo(() => {
  const {
    state: { currentIndex, timeline },
    dispatch,
  } = useSlides();
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    // TODO: swiper should be gone to context
    const { swiper } = document.querySelector('.swiper-container');
    swiper?.slideTo(currentIndex);
  }, [currentIndex]);

  const keyboardListener = ({ key }) => {
    if (Array.isArray(timeline[currentIndexRef.current])) {
      return;
    }

    if (key === 'ArrowRight') {
      dispatch(updateCurrentIndex('+'));
    } else if (key === 'ArrowLeft') {
      dispatch(updateCurrentIndex('-'));
    }
  };

  useEffect(() => {
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
