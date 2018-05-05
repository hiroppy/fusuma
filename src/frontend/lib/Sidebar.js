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

const Inner = (props) => (
  <React.Fragment>
    <div className="sidebar-social">
      <a
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?text=${process.env.TITLE} ${process.env.URL}`}
        target="_blank"
        className="fa fa-twitter"
      />
      <a
        rel="noopener noreferrer"
        href={`http://b.hatena.ne.jp/entry/${process.env.URL}`}
        target="_blank"
        className="fa fa-hatena"
      />
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
        onClick={() => {
          window.location.href = '?presenter=host';
          window.open('?presenter=view', '_blank', 'width=800,height=600');
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
        <a href={content.href} key={i}>
          - {content.text}
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
    {props.children}
  </Sidebar>
);

export default SidebarComponent;
