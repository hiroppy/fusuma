import React, { memo, useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Divider,
  Link,
} from '@chakra-ui/react';
import screenfull from 'screenfull';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { MdFirstPage, MdLastPage, MdFullscreen, MdAirplay, MdCode } from 'react-icons/md';
import { Tooltip } from '../components/Tooltip';
import { useSlides, updateCurrentIndex, setMode } from '../context/slides';
import { Prism } from '../setup/prism';
import { Slide } from './Slide';

const formatStr = (num) => `${num}`.padStart(2, '0');

const A = ({ href, areaLabel, children }) => (
  <a rel="noopener noreferrer" target="_blank" href={href} aria-label={areaLabel}>
    {children}
  </a>
);

export const Sidebar = memo(({ isOpen, onStateChange, onClose }) => {
  const [currentTab, setCurrentTab] = useState(1);
  const {
    state: { currentIndex, slides, contentsList },
    dispatch,
  } = useSlides();
  const totalSlides = slides.length;
  const url = process.env.URL || window.location.href.split('#')[0];
  const copyEmbedCode = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `<iframe src="${url}" style="width:100%;height:100%;"></iframe>`
      );
    }
  };

  useEffect(() => {
    Prism.highlightAll();

    if (process.env.CHART) {
      mermaid?.reload();
    }
  }, []);

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} autoFocus={false}>
      <DrawerOverlay />
      <DrawerContent minW="280px" maxW="280px" bg="#373a47" color="#f5f5f5" p={4}>
        <DrawerHeader fontSize="24px">
          <VStack align="stretch" spacing={4}>
            <HStack spacing={4} mx={4}>
              {process.env.HAS_TWITTER && (
                <A
                  href={`https://twitter.com/intent/tweet?text=${process.env.TITLE} ${url}`}
                  areaLabel={`${process.env.TITLE} ${url}`}
                >
                  <FaTwitter />
                </A>
              )}
              {process.env.REMOTE_ORIGIN_URL && (
                <A href={process.env.REMOTE_ORIGIN_URL} areaLabel="github">
                  <FaGithub style={{ width: 21, height: 21 }} />
                </A>
              )}
            </HStack>
            <HStack spacing={2} justify="center" align="center">
              <MdFirstPage onClick={() => dispatch(updateCurrentIndex(0))} cursor="pointer" />
              <Text>{`${formatStr(currentIndex + 1)} / ${formatStr(totalSlides)}`}</Text>
              <MdLastPage
                onClick={() => dispatch(updateCurrentIndex(totalSlides - 1))}
                cursor="pointer"
              />
            </HStack>
            <HStack justify="space-between" h="40px" px={5}>
              <Tooltip title="Presenter">
                <MdAirplay
                  onClick={() => dispatch(setMode('host'))}
                  style={{ width: 19, height: 19, marginTop: 3 }}
                />
              </Tooltip>
              <Tooltip title="Embed">
                <MdCode onClick={copyEmbedCode} style={{ width: 26, height: 26 }} />
              </Tooltip>
              <Tooltip title="Fullscreen">
                <MdFullscreen
                  style={{ width: 26, height: 26 }}
                  onClick={() => {
                    screenfull.isEnabled ? screenfull.toggle() : undefined;
                  }}
                />
              </Tooltip>
            </HStack>
          </VStack>
          <Divider my={4} />
          <HStack
            align="stretch"
            justify="space-around"
            fontSize="16px"
            cursor="pointer"
            fontWeight="normal"
          >
            <Text onClick={() => setCurrentTab(1)} color={currentTab === 1 ? 'inherit' : '#a0aec0'}>
              contents
            </Text>
            <Text onClick={() => setCurrentTab(2)} color={currentTab === 2 ? 'inherit' : '#a0aec0'}>
              slides
            </Text>
          </HStack>
        </DrawerHeader>
        <DrawerBody px={0}>
          <VStack spacing={3} overflow="auto" align="stretch" py={2}>
            {currentTab === 1 && (
              <Box mx={6} fontSize="20px">
                {contentsList?.map((content) => (
                  <Link
                    cursor="pointer"
                    onClick={() => dispatch(updateCurrentIndex(content.index - 1))}
                    key={content.index}
                  >
                    - {content.title}
                  </Link>
                ))}
              </Box>
            )}
            {currentTab === 2 &&
              slides?.map((slide, i) => (
                <Box
                  key={i}
                  onClick={() => dispatch(updateCurrentIndex(i))}
                  w="100%"
                  css={{ zoom: 0.3 }}
                >
                  <Slide slide={slide} />
                </Box>
              ))}
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
