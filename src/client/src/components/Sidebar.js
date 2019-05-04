import React from 'react';
import Sidebar from 'react-sidebar';
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

const url = process.env.URL;
const sns = process.env.SNS;
const title = process.env.TITLE;

const formatStr = (num) => `${num}`.padStart(2, '0');

const Inner = (props) => (
  <>
    <div className="sidebar-social">
      {Array.isArray(sns) &&
        url &&
        title &&
        sns.map((s) => {
          if (s === 'twitter') {
            return (
              <a key="twitter" href={`https://twitter.com/intent/tweet?text=${title} ${url}`}>
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
      <MdFirstPage onClick={() => props.goTo(0)} />
      <span>{`${formatStr(props.slideInfo.index + 1)} / ${formatStr(props.slideInfo.total)}`}</span>
      <MdLastPage onClick={() => props.goTo(props.slideInfo.total - 1)} />
    </div>
    <div>
      <MdFullscreen
        onClick={() => {
          screenfull.enabled ? screenfull.toggle() : undefined;
        }}
      />
      <MdAirplay onClick={() => props.runPresentationMode()} style={{ width: 18, height: 18 }} />
      {process.env.REMOTE_ORIGIN_URL ? (
        <a href={process.env.REMOTE_ORIGIN_URL}>
          <FaGithub style={{ width: 18, height: 18, marginTop: 8 }} />
        </a>
      ) : null}
    </div>
    <div className="sidebar-contents">
      {props.contents.map((content, i) => (
        <a href={`#slide=${content.index}`} key={i}>
          - {content.title}
        </a>
      ))}
    </div>
  </>
);

export const SidebarComponent = (props) => (
  <Sidebar
    sidebar={Inner(props)}
    shadow={false}
    open={props.opened}
    styles={styles}
    sidebarClassName="sidebar"
    onSetOpen={props.onSetOpen}
  >
    {''} {/* react-slider requires props.children... */}
  </Sidebar>
);
