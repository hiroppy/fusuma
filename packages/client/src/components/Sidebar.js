import React, { memo, useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import screenfull from 'screenfull';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { MdFirstPage, MdLastPage, MdFullscreen, MdAirplay, MdCode } from 'react-icons/md';
import { Tooltip } from '../components/Tooltip';
import { useSlides, updateCurrentIndex, setMode } from '../context/slides';
import { Prism } from '../setup/prism';
import { Slide } from './Slide';
import '../../assets/style/sidebar.css';

const formatStr = (num) => `${num}`.padStart(2, '0');

const A = ({ href, areaLabel, children }) => (
  <a rel="noopener noreferrer" target="_blank" href={href} aria-label={areaLabel}>
    {children}
  </a>
);

export const Sidebar = memo(({ isOpen, onStateChange }) => {
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
    <Box className="sidebar">
      <Flex className="sidebar-social">
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
            <FaGithub style={{ width: 20, height: 20 }} />
          </A>
        )}
      </Flex>
      <div className="sidebar-control">
        <MdFirstPage onClick={() => dispatch(updateCurrentIndex(0))} className="sidebar-cursor" />
        <span>{`${formatStr(currentIndex + 1)} / ${formatStr(totalSlides)}`}</span>
        <MdLastPage
          onClick={() => dispatch(updateCurrentIndex(totalSlides - 1))}
          className="sidebar-cursor"
        />
      </div>
      <div className="sidebar-tools">
        <Tooltip title="Presenter">
          <MdAirplay
            onClick={() => dispatch(setMode('host'))}
            style={{ width: 19, height: 19, marginTop: 3 }}
            className="sidebar-cursor"
          />
        </Tooltip>
        <Tooltip title="Embed">
          <MdCode
            onClick={copyEmbedCode}
            style={{ width: 26, height: 26 }}
            className="sidebar-cursor"
          />
        </Tooltip>
        <Tooltip title="Fullscreen">
          <MdFullscreen
            style={{ width: 26, height: 26 }}
            onClick={() => {
              screenfull.isEnabled ? screenfull.toggle() : undefined;
            }}
            className="sidebar-cursor"
          />
        </Tooltip>
      </div>
      <div className="sidebar-tabs">
        <hr />
        <div className="sidebar-tabs-title">
          <span
            className={currentTab === 1 ? 'sidebar-tabs-title-active' : null}
            onClick={() => setCurrentTab(1)}
          >
            contents
          </span>
          <span
            className={currentTab === 2 ? 'sidebar-tabs-title-active' : null}
            onClick={() => setCurrentTab(2)}
          >
            slides
          </span>
        </div>
        <div className="sidebar-contents">
          {currentTab === 1 && contentsList.length && (
            <ul className="sidebar-tabs-agenda">
              {contentsList.map((content) => (
                <li key={content.title}>
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={() => dispatch(updateCurrentIndex(content.index - 1))}
                  >
                    {content.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {currentTab === 2 && (
            <ul className="sidebar-tabs-slides">
              {slides.map((slide, i) => (
                <li key={i} onClick={() => dispatch(updateCurrentIndex(i))}>
                  <Slide slide={slide} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Box>
  );
});
