import React, { memo, useEffect } from 'react';
import { Button, Box, useDisclosure } from '@chakra-ui/react';
import { useSlides, updateCurrentIndex } from '../../context/slides';
import { useKeyBind } from '../../hooks/useKeyBind';
import { useSidebarComponent } from '../../hooks/useSidebarComponent';
import { MdMenu } from 'react-icons/md';
import { Slide } from '../Slide';

export const Base = memo(() => {
  const {
    state: { slides, currentIndex },
    dispatch,
  } = useSlides();
  const SidebarComponent = useSidebarComponent('common');
  const { isOpen, onClose, onOpen } = useDisclosure();

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
      {SidebarComponent && <SidebarComponent isOpen={isOpen} onClose={onClose} />}
      <Slide slide={slides[currentIndex]} />
      <Box pos="fixed" bottom="24px" left="24px" color="#f5f5f5" onClick={onOpen} cursor="pointer">
        <MdMenu />
      </Box>
    </>
  );
});
