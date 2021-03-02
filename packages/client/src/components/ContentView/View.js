import React, { memo, useEffect, useState } from 'react';
import { Receiver as PresentationReceiver } from '../../presentationMode/Receiver';
import { SlideCore } from '../SlideCore';
import { useSlides, updateCurrentIndex } from '../../context/slides';
import '../../../assets/style/view.css';

const View = memo(() => {
  const {
    state: { currentIndex },
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
      <SlideCore />
    </div>
  );
});

export default View;
