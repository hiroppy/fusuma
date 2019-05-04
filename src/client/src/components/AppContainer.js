import React from 'react';
import { MdMenu } from 'react-icons/md';
import { Loader } from './Loader';
import { Base } from './ContentView/Base';
import { router } from '../router';
import { createHtmlSlides } from '../utils/createHtmlSlides';
import { Controller as PresentationController } from './presentationMode/Controller'; // common and host
import { setup as setupWebSlides } from '../setup/webSlides';

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    let index = location.hash.match(/^#slide=(.+?)$/);

    index = index !== null ? index[1] - 1 : 0;

    this.state = {
      opened: false, // TODO: refactor to `status: {}`
      loader: true,
      SidebarComponent: null, // for lazy load
      slideInfo: {
        total: 0,
        index
      }
    };

    const { slides, contentsList } = createHtmlSlides(props.slides);
    this.slides = slides;
    this.contentsList = contentsList;
    this.ContentComponent = null;
    this.presentationApiId = null;

    this.routeMode();

    if (['common', 'host'].includes(this.mode)) {
      this.presentationController = new PresentationController();
    }
  }

  async componentDidMount() {
    const {
      SidebarComponent
    } = await import(/* webpackChunkName: 'Sidebar', webpackPrefetch: true */ './Sidebar');

    this.setState({ SidebarComponent });
  }

  async routeMode(mode) {
    this.mode = mode || router();

    if (this.mode === 'common') {
      this.ContentComponent = Base;
    } else {
      const { default: Comp } =
        this.mode === 'view'
          ? await import(/* webpackChunkName: 'presenter.view' */ './ContentView/View')
          : await import(/* webpackChunkName: 'presenter.host' */ './ContentView/Host');

      this.ContentComponent = Comp;
    }

    await new Promise((resolve) => {
      setTimeout(() => {
        this.setState({ loader: false, opened: false });
        resolve();
      }, 500);
    });

    if (!window.slide) {
      window.slide = setupWebSlides();

      this.updateSlideState(this.state.slideInfo.index);

      window.slide.el.addEventListener('ws:slide-change', (e) => {
        this.updateSlideState(e.detail.currentSlide0);

        if (this.mode !== 'view' && this.presentationController) {
          this.presentationController.changePage(window.slide.currentSlideI_);
        }
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
        total: this.slides.length,
        index
      }
    });
  };

  onSetSidebarOpen = (opened) => {
    this.setState({ opened });
  };

  onRunPresentationMode = async () => {
    try {
      this.presentationApiId = await this.presentationController.openView();

      window.slide = null;
      this.routeMode('host');
    } catch (e) {
      console.error(e);
    }
  };

  terminate = () => {
    if (this.presentationController) this.presentationController.terminate();

    window.slide = null;
    this.routeMode('common');
  };

  render() {
    return (
      <>
        {process.env.SIDEBAR && this.mode === 'common' && (
          <>
            {this.state.SidebarComponent && (
              <this.state.SidebarComponent
                goTo={this.goTo}
                opened={this.state.opened}
                contents={this.contentsList}
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
            slides={this.slides}
            terminate={this.terminate}
            currentIndex={this.state.slideInfo.index}
          />
        )}
      </>
    );
  }
}
