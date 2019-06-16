import React from 'react';
import { MdMenu } from 'react-icons/md';
import { Loader } from './Loader';
import { Base } from './ContentView/Base';
import { router } from '../router';
import { setup as setupWebSlides } from '../setup/webSlides';
import { ToC } from './ToC';

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    const parsedUrl = new URL(window.location.href);

    let index = parsedUrl.hash.match(/^#slide=(.+?)$/);

    index = index !== null ? index[1] - 1 : 0;

    this.state = {
      opened: false, // TODO: refactor to `status: {}`
      loader: true,
      SidebarComponent: null, // for lazy load
      isSidebar: true,
      slideInfo: {
        total: 0,
        index
      },
      slides: [],
      contentsList: []
    };

    this.params = parsedUrl.searchParams;
    this.ContentComponent = null;

    this.routeMode();
  }

  static getDerivedStateFromProps(props, state) {
    if (module.hot) {
      const slides = AppContainer.createProps(props.slides);

      return { ...slides };
    }
  }

  async componentDidMount() {
    this.changeSidebarState();

    const slides = AppContainer.createProps(this.props.slides);

    this.setState({ ...slides });

    if (this.state.isSidebar) {
      const { SidebarComponent } = await import(
        /* webpackChunkName: 'Sidebar', webpackPrefetch: true */ './Sidebar'
      );

      this.setState({ SidebarComponent });
    }
  }

  static createProps(slides) {
    const slidesArr = slides.map((s) => s.slides).flat();
    const propsArr = slides.map((s) => s.fusumaProps).flat();
    const res = {};

    propsArr.reduce((acc, { sectionTitle }, i) => {
      if (sectionTitle) {
        acc.push({
          title: sectionTitle,
          index: i + 1
        });
      }
      return acc;
    }, (res.contentsList = []));

    res.slides = slidesArr.map((slide, i) => {
      const props = propsArr[i];

      return {
        slide: props.contents ? ToC({ list: res.contentsList }) : slide,
        fusumaProps: props
      };
    });

    return res;
  }

  changeSidebarState = () => {
    const isSidebar =
      this.params.get('sidebar') === 'false' || !process.env.SIDEBAR || this.mode !== 'common'
        ? false
        : true;

    this.setState({ isSidebar });
  };

  async routeMode(mode) {
    if (this.mode !== undefined) {
      this.mode = mode || router();
      this.changeSidebarState();
    } else {
      this.mode = mode || router();
    }

    if (this.mode === 'common') {
      this.ContentComponent = Base;
    } else {
      const { default: Comp } =
        this.mode === 'view'
          ? await import(/* webpackChunkName: 'presenter.view' */ './ContentView/View')
          : await import(/* webpackChunkName: 'presenter.host' */ './ContentView/Host');

      this.ContentComponent = Comp;
    }

    if (this.mode === 'host') {
      this.setState({ loader: false, opened: false });
    } else {
      await new Promise((resolve) => {
        setTimeout(() => {
          this.setState({ loader: false, opened: false });
          resolve();
        }, 500);
      });
    }

    if (!window.slide) {
      window.slide = setupWebSlides();

      this.updateSlideState(this.state.slideInfo.index);

      window.slide.el.addEventListener('ws:slide-change', (e) => {
        this.updateSlideState(e.detail.currentSlide0);
      });
    }
  }

  goTo = (num) => {
    if (window.slide) {
      window.slide.goToSlide(num);
    }
  };

  updateSlideState = (index) => {
    this.setState({
      slideInfo: {
        ...this.state.slideInfo,
        total: this.state.slides.length,
        index
      }
    });
  };

  onSetSidebarOpen = (opened) => {
    this.setState({ opened });
  };

  onRunPresentationMode = () => {
    window.slide = null;
    this.routeMode('host');
  };

  terminate = () => {
    window.slide = null;
    this.routeMode('common');
  };

  render() {
    return (
      <>
        {this.state.isSidebar && (
          <>
            {this.state.SidebarComponent && (
              <this.state.SidebarComponent
                goTo={this.goTo}
                opened={this.state.opened}
                terminate={this.terminate}
                contents={this.state.contentsList}
                onSetOpen={this.onSetSidebarOpen}
                slideInfo={this.state.slideInfo}
                runPresentationMode={this.onRunPresentationMode}
              />
            )}
            <MdMenu className="btn-sidebar" onClick={() => this.onSetSidebarOpen(true)} />
          </>
        )}
        <Loader displayed={this.state.loader} />
        {this.ContentComponent && (
          <this.ContentComponent
            slides={this.state.slides}
            terminate={this.terminate}
            currentIndex={this.state.slideInfo.index}
          />
        )}
      </>
    );
  }
}
