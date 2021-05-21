import React, { memo, useEffect } from 'react';
import { useSlides, updateCurrentIndex } from '../../context/slides';
import { SlideCore } from '../SlideCore';
import { SlideList } from '../SlideList';
import { useKeyBind } from '../../hooks/useKeyBind';

export const Base = memo(() => {
  const {
    state: { currentIndex },
    dispatch,
  } = useSlides();
  useKeyBind({
    ArrowRight: () => dispatch(updateCurrentIndex('+')),
    ArrowLeft: () => dispatch(updateCurrentIndex('-')),
  });

  useEffect(() => {
    if (window.innerWidth <= 768) {
      (async () => {
        const { swipeEvent } = await import('../../utils/swipeEvent');

        swipeEvent((operation) => {
          dispatch(updateCurrentIndex(operation));
        });
      })();
    }
  }, []);

  return (
    <>
      {process.env.NODE_ENV === 'development' && <SlideList />}
      <SlideCore id="main-slides" />
    </>
  );
});
