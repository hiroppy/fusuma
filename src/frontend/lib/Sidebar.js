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
                rel="noopener noreferrer"
                href={`https://twitter.com/intent/tweet?text=${title} ${url}`}
                target="_blank"
                className="fa fa-twitter"
              />
            );
          }
          if (s === 'hatena') {
            return (
              <a
                rel="noopener noreferrer"
                key="hatena"
                href={`http://b.hatena.ne.jp/entry/${url}`}
                target="_blank"
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
      <a
        onClick={async () => {
          props.runPresentationMode();
          // window.location.href = '?presenter=host';
          // await openView();
          // window.location.href = '?presenter=host';
          // window.open('?presenter=view', '_blank', 'width=800,height=600');
        }}
        className="fa fa-rocket"
      />
      {process.env.REMOTE_ORIGIN_URL ? (
        <a
          rel="noopener noreferrer"
          href={process.env.REMOTE_ORIGIN_URL}
          target="_blank"
          className="fa fa-github"
        />
      ) : null}
    </div>
    <div className="sidebar-contents">
      {props.contents.map((content, i) => (
        <a href={`#${content.index}`} key={i}>
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
