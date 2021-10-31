import { Box, Flex } from '@chakra-ui/react';
import React, { FC, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { useSlides, updateCurrentIndex } from '../context/slides';
import { Slide } from './Slide';
import { useKeyBind } from '../hooks/useKeyBind';

export const Slides = () => {
  const {
    state: { slides, currentIndex },
    dispatch,
  } = useSlides();

  useKeyBind({
    ArrowRight: () => dispatch(updateCurrentIndex('+')),
    ArrowLeft: () => dispatch(updateCurrentIndex('-')),
  });

  return (
    <Box h="100vh" textAlign="center">
      <Slide
        currentIndex={currentIndex}
        onChange={(activeIndex) => dispatch(updateCurrentIndex(activeIndex))}
      >
        {slides.map(({ slide: Main, fusumaProps }, i) => (
          <Flex
            align="center"
            justify="center"
            flexDirection="column"
            h="100%"
            w="100%"
            pos="absolute"
            key={i}
            className={classnames(
              // TODO
              'slide-box',
              'slide-background',
              'slide-internal-box',
              fusumaProps.classes,
              fusumaProps.sectionTitle ? 'section-title' : undefined
            )}
          >
            <Main />
          </Flex>
        ))}
      </Slide>
    </Box>
  );
};
