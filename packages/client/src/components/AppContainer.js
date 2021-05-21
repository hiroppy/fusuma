import React, { useEffect } from 'react';
import { MdMenu } from 'react-icons/md';
import { useContentComponent } from '../hooks/useContentComponent';
import { useSlides, addSlides } from '../context/slides';

export const AppContainer = ({ slidesProps }) => {
  const {
    state: { mode },
    dispatch,
  } = useSlides();
  const ContentComponent = useContentComponent(mode);

  useEffect(() => {
    dispatch(addSlides(slidesProps));
  }, [slidesProps]);

  return ContentComponent && <ContentComponent />;
};
