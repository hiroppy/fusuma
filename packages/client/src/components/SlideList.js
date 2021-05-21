import React, { useState } from 'react';
import classnames from 'classnames';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useSlides, updateCurrentIndex } from '../context/slides';
import '../../assets/style/slidesList.css';

export const SlideList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {
    state: { slides },
    dispatch,
  } = useSlides();
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={classnames(
        'slides-list-container',
        isOpen ? 'slide-list-open' : 'slide-list-close'
      )}
    >
      <span className="slides-list-toggle" onClick={onClick}>
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </span>
    </div>
  );
};
