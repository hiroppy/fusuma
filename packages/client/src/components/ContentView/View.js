import React, { memo, useEffect, useState } from 'react';
import { Receiver as PresentationReceiver } from '../../presentationMode/Receiver';
import { useSlides, updateCurrentIndex } from '../../context/slides';
import { Slide } from '../Slide';
import '../../../assets/style/view.css';

const View = memo(() => {
  const {
    state: { slides, currentIndex },
    dispatch,
  } = useSlides();
  const [presentationReceiver, setPresentationReceiver] = useState(null);

  useEffect(() => {
    presentationReceiver?.onChangePage((operation) => {
      dispatch(updateCurrentIndex(operation));
    });
  }, [presentationReceiver]);

  useEffect(() => {
    window.onload = () => {
      setPresentationReceiver(new PresentationReceiver());
    };
  }, []);

  useEffect(() => {
    // TODO: swiper should be gone to context
    const { swiper } = document.querySelector('#main-slides');
    swiper?.slideTo(currentIndex);
  }, [currentIndex]);

  return (
    <div className="fusuma-presenter-view">
      <Slide slide={slides[currentIndex]} />
    </div>
  );
});

export default View;
