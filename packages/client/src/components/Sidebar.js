import React, { memo } from 'react';
import { slide as Menu } from 'react-burger-menu';
import screenfull from 'screenfull';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { MdFirstPage, MdLastPage, MdFullscreen, MdAirplay, MdCode } from 'react-icons/md';
import { Tooltip } from '../components/Tooltip';
import '../../assets/style/sidebar.css';

const formatStr = (num) => `${num}`.padStart(2, '0');

const A = ({ href, areaLabel, children }) => (
  <a key="twitter" rel="noopener noreferrer" target="_blank" href={href} aria-label={areaLabel}>
    {children}
  </a>
);

export const Sidebar = memo(
  ({ isOpen, onStateChange, goTo, currentIndex, runPresentationMode, contents, totalSlides }) => {
    const url = process.env.URL || window.location.href.split('#')[0];
    const copyEmbedCode = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(
          `<iframe src="${url}" style="width:100%;height:100%;"></iframe>`
        );
      }
    };

    return (
      <Menu isOpen={isOpen} disableAutoFocus onStateChange={onStateChange} outerContainerId="root">
        <div className="sidebar-social">
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
        </div>
        <div className="sidebar-control">
          <MdFirstPage onClick={() => goTo(0)} className="sidebar-cursor" />
          <span>{`${formatStr(currentIndex + 1)} / ${formatStr(totalSlides)}`}</span>
          <MdLastPage onClick={() => goTo(totalSlides - 1)} className="sidebar-cursor" />
        </div>
        <div className="sidebar-tools">
          <Tooltip title="Presenter">
            <MdAirplay
              onClick={() => runPresentationMode()}
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
        {contents.length && (
          <ul className="sidebar-contents">
            {contents.map((content) => (
              <li key={content.title}>
                <a style={{ cursor: 'pointer' }} onClick={() => goTo(content.index - 1)}>
                  {content.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </Menu>
    );
  }
);
