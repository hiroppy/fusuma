import React, { useEffect, useState, useRef } from 'react';
import { useSlides, updateCurrentIndex } from '../context/slides';

export const Fragments = ({ children, id }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(0);
  const currentStepRef = useRef(currentStep);
  const stepsRef = useRef(steps);
  const {
    state: { currentIndex, timeline },
    dispatch,
  } = useSlides();

  const listener = (e) => {
    e.stopPropagation();

    if (e.key === 'ArrowRight') {
      const next = currentStepRef.current + 1;

      if (next > stepsRef.current) {
        dispatch(updateCurrentIndex('+'));
        document.removeEventListener('keydown', listener);
      } else {
        setCurrentStep(next);
      }
    } else if (e.key === 'ArrowLeft') {
      const next = currentStepRef.current - 1;

      if (next < 0) {
        dispatch(updateCurrentIndex('-'));
        document.removeEventListener('keydown', listener);
      } else {
        setCurrentStep(next);
      }
    }
  };

  useEffect(() => {
    currentStepRef.current = currentStep;
    stepsRef.current = steps;
  }, [currentStep, steps]);

  useEffect(() => {
    const current = timeline[currentIndex];

    if (Array.isArray(current) && current[0] === id) {
      setSteps(current.length);

      document.addEventListener('keydown', listener, {
        capture: false,
        passive: false,
      });
    }
  }, [currentIndex]);

  return React.Children.map(children, (child, i) =>
    React.cloneElement(child, { style: { visibility: i >= currentStep ? 'hidden' : 'initial' } })
  );
};
