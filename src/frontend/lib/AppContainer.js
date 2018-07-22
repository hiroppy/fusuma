/* eslint-disable  react/prop-types */

import React from 'react';
import Loader from './Loader';
import Base from './ContentView/Base';
import router from './utils/router';
import parseAttrs from './utils/parse-attrs';
import { insertContentsList } from './utils/replace-html';
import setupBespoke from './setup-bespoke';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false, // only use presenter mode
      opened: false, // TODO: refactor to `status: {}`
      loader: true,
      SidebarComponent: null, // for lazy load
      slideInfo: {
        total: 0,
        index: location.hash.slice(1) || 0,
        current: '0' // string
      }
    };

    this.slides = [];
    this.contentsList = [];
    this.setupBespokeFlag = false; // for lazy load

    props.slides.forEach((slide, i) => {
      const meta = parseAttrs(slide);

      this.slides.push({
        meta,
        context: slide
      });

      if (meta.sectionTitle !== '') {
        this.contentsList.push({
          title: meta.sectionTitle,
          index: i + 1
        });
      }
    });

    if (this.contentsList.length !== 0) {
      this.slides.forEach((e, i) => {
        if (e.meta.shouldReplace) {
          this.slides[i].context = insertContentsList(e.context, this.contentsList);
        }
      });
    }

    const mode = router();

    if (mode === 'view') {
      import(/* webpackChunkName: 'presenter.view' */ './ContentView/View').then((e) => {
        this.content = e.default;
        this.setState({ loaded: true });
        this.setupBespokeFlag = true;
        this.changeLoaderState();
      });
    } else if (mode === 'host') {
      import(/* webpackChunkName: 'presenter.host' */ './ContentView/Host').then((e) => {
        this.content = e.default;
        this.setState({ loaded: true });
        this.setupBespokeFlag = true;
        this.changeLoaderState();
      });
    } else {
      this.changeLoaderState();
    }
  }

  componentDidMount() {
    if (router() === 'common') {
      this.setupBespoke();
      import('./setup-prism'); // other types(presenter mode: host, view) require lazy loading
    }

    setTimeout(() => {
      const index = window.slide.bespoke.slide() + 1;

      this.setState({
        slideInfo: {
          total: `${this.slides.length}`.padStart(2, '0'),
          index,
          current: `${index}`.padStart(2, '0')
        }
      });

      window.slide.bespoke.on('activate', () => {
        const index = window.slide.bespoke.slide() + 1;

        this.setState({
          slideInfo: {
            ...this.state.slideInfo,
            index,
            current: `${index}`.padStart(2, '0')
          }
        });
      });
    }, 4000);

    // load Sidebar
    import(/* webpackChunkName: 'Sidebar' */
    /* webpackPrefetch: true */
    './Sidebar').then(({ default: SidebarComponent }) => {
      this.setState({ SidebarComponent });
    });
  }

  UNSAFE_componentWillUpdate() {
    if (this.setupBespokeFlag) {
      this.setupBespoke();
      this.setupBespokeFlag = false;
    }
  }

  changeLoaderState = () => {
    // eslint-disable-line react/sort-comp
    window.onload = () => {
      setTimeout(() => this.setState({ loader: false }), 500);
    };
  };

  goTo = (num) => {
    // eslint-disable-line react/sort-comp
    window.slide.bespoke.slide(num);
  };

  onSetSidebarOpen = (opened) => {
    this.setState({ opened });
  };

  setupBespoke = () => {
    // hmmm.... I have no idea
    // because DOM tree must be built when calling setupBespoke.
    window.slide = {};
    window.slide.bespoke = setupBespoke(this.props.theme);
  };

  getContent = () => {
    return (
      <React.Fragment>
        <Loader displayed={this.state.loader} />
        {this.content ? (
          <this.content slides={this.slides} loadedBespoke={!this.state.loader} />
        ) : (
          <Base slides={this.slides} currentIndex={this.state.slideInfo.index} />
        ) /* for common */}
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        {process.env.SIDEBAR ? (
          <React.Fragment>
            {this.state.SidebarComponent ? (
              <this.state.SidebarComponent
                goTo={this.goTo}
                opened={this.state.opened}
                contents={this.contentsList}
                onSetOpen={this.onSetSidebarOpen}
                slideInfo={this.state.slideInfo}
              />
            ) : null}
            <i
              style={{ width: 50 }}
              className="btn-sidebar fa fa-bars"
              onClick={() => this.onSetSidebarOpen(true)}
            />
          </React.Fragment>
        ) : null}
        {this.getContent()}
      </React.Fragment>
    );
  }
}

export default AppContainer;
