// import React, { useEffect, useState } from 'react';
// import { Box, Flex } from '@chakra-ui/react';
// import classnames from 'classnames';
import { Prism } from '../setup/prism';
import { getSearchParams } from '../utils/getSearchParams';
import { createVMEnv } from '../utils/createVMEnv';
import { useMermaid } from '../hooks/useMermaid';

// export const Slide = ({ slide, ...rest }) => {
//   const [isShow, setIsShow] = useState(false);
//   const [mermaid] = useMermaid();
//   const { slide: SlideComponent, fusumaProps } = slide;

//   useEffect(() => {
//     setTimeout(() => {
//       if (process.env.CHART) {
//         mermaid?.reload();
//       }
//       Prism.highlightAll();
//     }, 0);
//   }, [slide]);

//   return (
//     <Box
//       h="100vh"
//       w="100%"
//       position="relative"
//       className={classnames(
//         'slide-box',
//         'slide-background',
//         fusumaProps.classes,
//         fusumaProps.sectionTitle ? 'section-title' : undefined
//       )}
//       {...fusumaProps.background}
//       {...rest}
//     >
//       <Flex
//         flexDirection="column"
//         alignItems="center"
//         minW="320px"
//         h="100%"
//         w="100%"
//         m="auto"
//         className="slide-internal-box"
//       >
//         <SlideComponent />
//       </Flex>
//     </Box>
//   );
// };

import { Box } from '@chakra-ui/react';
import React, { FC, useEffect, useRef, useState } from 'react';

function isMouseEvent(e) {
  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'].includes(e.type);
}

export const Slide = ({ currentIndex, children, onChange }) => {
  const [startX, setStartX] = useState(null);
  const [diffX, setDiffX] = useState(0);
  const [allowedClick, setAllowedClick] = useState(true);
  const [currentIndexSnapshot, setCurrentIndexSnapshot] = useState(currentIndex);
  const startXRef = useRef(null);
  const diffXRef = useRef(0);
  const allowedClickRef = useRef(true);
  const currentIndexSnapshotRef = useRef(currentIndex);
  const ref = useRef(null);

  startXRef.current = startX;
  diffXRef.current = diffX;
  allowedClickRef.current = allowedClick;
  currentIndexSnapshotRef.current = currentIndexSnapshot;

  const onStarted = (e) => {
    // don't execute preventDefault when mobiles, if enable, touch event won't work
    if (isMouseEvent(e)) {
      e.preventDefault();
      setStartX(e.clientX);
    } else {
      const firstTouch = e.touches[0];

      setStartX(firstTouch.clientX);
    }
  };

  const onMoving = (e) => {
    // prevent flicking the whole screen on mobile so need to execute preventDefault
    e.preventDefault();

    if (startXRef.current === null) {
      return;
    }

    setAllowedClick(false);

    if (isMouseEvent(e)) {
      setDiffX(e.clientX - startXRef.current);
    } else {
      const firstTouch = e.touches[0];

      setDiffX(firstTouch.clientX - startXRef.current);
    }
  };

  const calcNextIndex = (e) => {
    // don't execute preventDefault when mobiles, if enable, touch event won't work
    if (isMouseEvent(e)) {
      e.preventDefault();
    }

    const diffX = diffXRef.current;
    const currentIndex = currentIndexSnapshotRef.current;

    let nextIndex = currentIndex;

    // prev
    if (diffX > 20) {
      nextIndex = Math.max(currentIndex - 1, 0);
    }
    // next
    if (diffX < -20) {
      const totalSlides = React.Children.count(children);

      nextIndex = Math.min(currentIndex + 1, totalSlides - 1);
    }

    if (nextIndex !== currentIndex) {
      onChange(nextIndex);
    }

    setStartX(null);
    setDiffX(0);

    setTimeout(() => {
      setAllowedClick(true);
    }, 300);
  };

  useEffect(() => {
    if (currentIndex !== currentIndexSnapshot) {
      setCurrentIndexSnapshot(currentIndex);
    }
  }, [currentIndex, currentIndexSnapshot]);

  const onClick = (e) => {
    e.preventDefault();

    // prevent firing onClick event from parent after scrolling
    if (!allowedClickRef.current) {
      e.stopImmediatePropagation();
    }
  };

  useEffect(() => {
    if (ref.current) {
      const options = {
        passive: false,
        capture: false,
      };

      ref.current.addEventListener('mousedown', onStarted, options);
      ref.current.addEventListener('mousemove', onMoving, options);
      ref.current.addEventListener('mouseup', calcNextIndex, options);
      ref.current.addEventListener('mouseleave', calcNextIndex, options);
      ref.current.addEventListener('touchstart', onStarted, options);
      ref.current.addEventListener('touchmove', onMoving, options);
      ref.current.addEventListener('touchend', calcNextIndex, options);
      ref.current.addEventListener('click', onClick, options);

      return () => {
        if (ref.current) {
          ref.current.removeEventListener('mousedown', onStarted);
          ref.current.removeEventListener('mousemove', onMoving);
          ref.current.removeEventListener('mouseup', calcNextIndex);
          ref.current.removeEventListener('touchstart', onStarted);
          ref.current.removeEventListener('touchmove', onMoving);
          ref.current.removeEventListener('touchend', calcNextIndex);
          ref.current.removeEventListener('click', onClick);
        }
      };
    }
  }, [ref]);

  return (
    <Box overflow="hidden" ref={ref} h="100%" w="100%" zIndex={1}>
      <Box
        whiteSpace="nowrap"
        transition="transform 0.3s"
        transform={`translate3d(${-100 * currentIndex}%, 0, 0) translate3d(${diffX}px, 0, 0)`}
        h="100%"
        w="100%"
      >
        {React.Children.map(children, (child, i) => (
          <Box userSelect="none" display="inline-block" h="100%" w="100%" key={i}>
            {React.isValidElement(child) && React.cloneElement(child)}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
