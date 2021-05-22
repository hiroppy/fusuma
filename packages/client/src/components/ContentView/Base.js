import React, { useState, memo, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useSlides, updateCurrentIndex } from '../../context/slides';
import { SlideCore } from '../SlideCore';
import { useKeyBind } from '../../hooks/useKeyBind';
import { useSidebarComponent } from '../../hooks/useSidebarComponent';
import { MdMenu } from 'react-icons/md';

export const Base = memo(() => {
  const [isOpenSidebar, updateOpenSidebarStatus] = useState(false);
  const {
    state: { currentIndex },
    dispatch,
  } = useSlides();
  const SidebarComponent = useSidebarComponent('common');

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
    <Flex>
      {isOpenSidebar && SidebarComponent && (
        <SidebarComponent onStateChange={({ isOpen }) => updateOpenSidebarStatus(isOpen)} />
      )}
      <Box w={isOpenSidebar ? 'calc(100% - 240px)' : '100%'}>
        <SlideCore />
      </Box>
      <MdMenu className="btn-sidebar" onClick={() => updateOpenSidebarStatus(!isOpenSidebar)} />
    </Flex>
  );
});
