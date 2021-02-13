import React, { useEffect, useState } from 'react';
import { useSlides } from '../context/slides';

export const Fragments = ({ children, id }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    state: { currentIndex, timeline, currentFragmentSteps },
  } = useSlides();

  useEffect(() => {
    if (Array.isArray(timeline[currentIndex]) && timeline[currentIndex][0] === id) {
      setCurrentStep(currentFragmentSteps);
    }
  }, [currentIndex, currentFragmentSteps]);

  return React.Children.map(children, (child, i) =>
    React.cloneElement(child, { style: { visibility: i >= currentStep ? 'hidden' : 'initial' } })
  );
};
