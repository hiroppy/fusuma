import React, { useEffect, useState, useRef } from 'react';
import { useSlides } from '../context/slides';

export const Fragments = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const ref = useRef(currentStep);
  const {
    state: { currentIndex },
  } = useSlides();

  const listener = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('aaaa');
    if (e.key === 'ArrowRight') {
      setCurrentStep(ref.current + 1);
    }
  };

  useEffect(() => {
    ref.current = currentStep;
  }, [currentStep]);

  useEffect(() => {
    // document.addEventListener('keydown', listener, {
    //   capture: false,
    //   passive: false,
    // });
    // return () => {
    //   document.removeEventListener('keydown', listener);
    // };
  }, []);

  return React.Children.map(children, (child, i) =>
    React.cloneElement(child, { style: { visibility: i >= currentStep ? 'hidden' : 'initial' } })
  );
};
