import React from 'react';
import { useSlides } from '../context/slides';
import { Slide } from './Slide';

export const SlideCore = (props) => {
  const {
    state: { slides, currentIndex },
  } = useSlides();

  return <Slide slide={slides[currentIndex]} />;
};
