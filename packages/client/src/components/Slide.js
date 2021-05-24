import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import classnames from 'classnames';
import { Prism } from '../setup/prism';
import { getSearchParams } from '../utils/getSearchParams';
import { createVMEnv } from '../utils/createVMEnv';
import { useMermaid } from '../hooks/useMermaid';

export const Slide = ({ slide, ...rest }) => {
  const [isShow, setIsShow] = useState(false);
  const [mermaid] = useMermaid();
  const { slide: SlideComponent, fusumaProps } = slide;

  useEffect(() => {
    setTimeout(() => {
      if (process.env.CHART) {
        mermaid?.reload();
      }
      Prism.highlightAll();
    }, 0);
  }, [slide]);

  return (
    <Box
      h="100vh"
      w="100%"
      position="relative"
      className={classnames(
        'slide-box',
        'slide-background',
        fusumaProps.classes,
        fusumaProps.sectionTitle ? 'section-title' : undefined
      )}
      {...fusumaProps.background}
      {...rest}
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        minW="320px"
        h="100%"
        w="100%"
        m="auto"
        className="slide-internal-box"
      >
        <SlideComponent />
      </Flex>
    </Box>
  );
};
