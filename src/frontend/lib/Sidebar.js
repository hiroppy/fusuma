/* eslint-disable react/prop-types */

import React from 'react';
import Sidebar from 'react-sidebar';
import screenfull from 'screenfull';

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

const Inner = (props) => (
  <React.Fragment>
    <div className="sidebar-social">
      {Array.isArray(sns) &&
        url &&
        title &&
        sns.map((s) => {
          if (s === 'twitter') {
            return (
              <a
                key="twitter"
                href={`https://twitter.com/intent/tweet?text=${title} ${url}`}
                className="fa fa-twitter"
              />
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
      <a onClick={() => props.goTo(0)} className="fa fa-fast-backward" />
      <span>
        {props.slideInfo.current} / {props.slideInfo.total}
      </span>
      <a onClick={() => props.goTo(props.slideInfo.total - 1)} className="fa fa-fast-forward" />
    </div>
    <div>
      <a
        onClick={() => (screenfull.enabled ? screenfull.toggle() : undefined)}
        className="fa fa-arrows-alt"
      />
      <a onClick={() => props.runPresentationMode()} className="fa fa-rocket" />
      {process.env.REMOTE_ORIGIN_URL ? (
        <a href={process.env.REMOTE_ORIGIN_URL} className="fa fa-github" />
      ) : null}
    </div>
    <div className="sidebar-contents">
      {props.contents.map((content, i) => (
        <a href={`#${content.index - 1}`} key={i}>
          - {content.title}
        </a>
      ))}
    </div>
  </React.Fragment>
);

const SidebarComponent = (props) => (
  <Sidebar
    sidebar={Inner(props)}
    shadow={false}
    open={props.opened}
    styles={styles}
    sidebarClassName="sidebar"
    onSetOpen={props.onSetOpen}
  >
    &apos;{/* react-slider requires props.children... */}
  </Sidebar>
);

export default SidebarComponent;
