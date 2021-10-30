import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

export const Tooltip = ({ children, title }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Box
      cursor="pointer"
      pos="relative"
      w={6}
      h={6}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <Text
        pos="absolute"
        left="50%"
        transform="translateX(-50%)"
        visibility={isShow ? 'visible' : 'hidden'}
        bg="rgba(0,0,0,0.3)"
        color="#f5f5f5"
        textAlign="center"
        px={2}
        py={1}
        borderRadius="6px"
        zIndex={2}
        top="-220%"
        transition="0.2s ease-in"
        fontSize="14px"
      >
        {title}
      </Text>
      {children}
    </Box>
  );
};
