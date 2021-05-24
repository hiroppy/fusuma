import React, { memo, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Receiver as PresentationReceiver } from '../../presentationMode/Receiver';
import { useSlides, updateCurrentIndex } from '../../context/slides';
import { Slide } from '../Slide';

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

  return (
    <Box h="100vh" w="100vw">
      <Slide slide={slides[currentIndex]} />
    </Box>
  );
});

export default View;
