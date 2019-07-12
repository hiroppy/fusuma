import React, { memo } from 'react';
import { slide as Menu } from 'react-burger-menu';
import screenfull from 'screenfull';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { MdFirstPage, MdLastPage, MdFullscreen, MdAirplay } from 'react-icons/md';

const styles = {
  sidebar: {
    minWidth: 150,
    zIndex: 1001
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    zIndex: 1000
  }
};

const url = process.env.URL || window.location.href.split('#')[0];
const sns = process.env.SNS;
const title = process.env.TITLE || '';

const formatStr = (num) => `${num}`.padStart(2, '0');

export const Sidebar = memo(
  ({ isOpen, onStateChange, goTo, currentIndex, runPresentationMode, contents }) => (
    <Menu
      isOpen={isOpen}
      disableAutoFocus
      onStateChange={onStateChange}
      outerContainerId="root"
      pageWrapId="webslides"
    >
      <div className="sidebar-social">
        {Array.isArray(sns) &&
          sns.map((s) => {
            if (s === 'twitter') {
              return (
                <a
                  key="twitter"
                  rel="noopener"
                  target="_blank"
                  href={`https://twitter.com/intent/tweet?text=${title} ${url}`}
                  aria-label={`${title} ${url}`}
                >
                  <FaTwitter />
                </a>
              );
            }
            if (s === 'hatena') {
              return (
                <a
                  key="hatena"
                  href={`http://b.hatena.ne.jp/entry/${url}`}
                  className="fa fa-hatena"
                />
              );
            }
          })}
      </div>
      <div className="sidebar-control">
        {window.slide && (
          <>
            <MdFirstPage onClick={() => goTo(0)} className="sidebar-cursor" />
            <span>{`${formatStr(currentIndex + 1)} / ${formatStr(
              window.slide.slides.length
            )}`}</span>
            <MdLastPage
              onClick={() => goTo(window.slide.slides.length - 1)}
              className="sidebar-cursor"
            />
          </>
        )}
      </div>
      <div className="sidebar-tools">
        <MdFullscreen
          style={{ width: 26, height: 26 }}
          onClick={() => {
            screenfull.enabled ? screenfull.toggle() : undefined;
          }}
          className="sidebar-cursor"
        />
        <MdAirplay
          onClick={() => runPresentationMode()}
          style={{ width: 19, height: 19, marginTop: 1 }}
          className="sidebar-cursor"
        />
        {process.env.REMOTE_ORIGIN_URL && (
          <a
            href={process.env.REMOTE_ORIGIN_URL}
            target="_blank"
            rel="noopener"
            aria-label="github"
          >
            <FaGithub style={{ width: 20, height: 20, marginTop: 3, color: '#f5f5f5' }} />
          </a>
        )}
      </div>
      <ul className="sidebar-contents">
        {contents.map((content, i) => (
          <li key={i}>
            <a href={`#slide=${content.index}`}>{content.title}</a>
          </li>
        ))}
      </ul>
    </Menu>
  )
);
