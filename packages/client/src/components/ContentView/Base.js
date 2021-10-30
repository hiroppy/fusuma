import React, { memo } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import { useSidebarComponent } from '../../hooks/useSidebarComponent';
import { MdMenu } from 'react-icons/md';
import { Slide } from '../Slide';
import { Slides } from '../Slides';

export const Base = memo(() => {
  const SidebarComponent = useSidebarComponent('common');
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      {SidebarComponent && <SidebarComponent isOpen={isOpen} onClose={onClose} />}
      <Slides />
      <Box pos="fixed" bottom="24px" left="24px" color="#f5f5f5" onClick={onOpen} cursor="pointer">
        <MdMenu />
      </Box>
    </>
  );
});
