import React, { memo, useEffect } from 'react';
import { useSlides, updateCurrentIndex } from '../../context/slides';
import { SlideCore } from '../SlideCore';
import { SlideList } from '../SlideList';

export const Base = memo(() => {
  const {
    state: { currentIndex },
    dispatch,
  } = useSlides();

  useEffect(() => {
    // TODO: swiper should be gone to context
    const { swiper } = document.querySelector('#main-slides');
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

    if (window.innerWidth <= 768) {
      (async () => {
        const { swipeEvent } = await import('../../utils/swipeEvent');
        swipeEvent((operation) => {
          dispatch(updateCurrentIndex(operation));
        });
      })();
    }

    document.addEventListener('keydown', keyboardListener);

    return () => {
      document.removeEventListener('keydown', keyboardListener);
    };
  }, []);

  return (
    <>
      {process.env.NODE_ENV === 'development' && <SlideList />}
      <SlideCore id="main-slides" />
    </>
  );
});
