import React from 'react';
import { MdMenu } from 'react-icons/md';
import { Loader } from './Loader';
import { Base } from './ContentView/Base';
import { setup as setupBespoke } from '../setup/bespoke';
import { router } from '../router';
import { createHtmlSlides } from '../utils/createHtmlSlides';
import { Controller as PresentationController } from './presentationMode/Controller'; // common and host
import { PageNumber } from './PageNumber';

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false, // TODO: refactor to `status: {}`
      loader: true,
      SidebarComponent: null, // for lazy load
      slideInfo: {
        total: 0,
        index: location.hash.slice(1) || 0,
        current: '0' // string
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
      this.setupBespoke();

      // TODO: refactor
      const index = window.slide.bespoke.slide();
      this.setState({
        slideInfo: {
          ...this.state.slideInfo,
          index: index + 1,
          total: `${this.slides.length}`.padStart(2, '0'),
          current: `${index + 1}`.padStart(2, '0')
        }
      });

      window.slide.bespoke.on('activate', () => {
        setTimeout(() => {
          const index = window.slide.bespoke.slide();

          this.setState({
            slideInfo: {
              ...this.state.slideInfo,
              index: index + 1,
              total: `${this.slides.length}`.padStart(2, '0'),
              current: `${index + 1}`.padStart(2, '0')
            }
          });

          if (this.mode !== 'view' && this.presentationController) {
            this.presentationController.changePage(index);
          }
        }, 0);
      });
    }
  }

  async componentDidMount() {
    const {
      SidebarComponent
    } = await import(/* webpackChunkName: 'Sidebar', webpackPrefetch: true */ './Sidebar');

    this.setState({ SidebarComponent });
  }

  goTo = (num) => {
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
        {process.env.SIDEBAR && this.mode === 'common' ? (
          <>
            {this.state.SidebarComponent ? (
              <this.state.SidebarComponent
                goTo={this.goTo}
                opened={this.state.opened}
                contents={this.contentsList}
                onSetOpen={this.onSetSidebarOpen}
                slideInfo={this.state.slideInfo}
                runPresentationMode={this.onRunPresentationMode}
              />
            ) : null}
            <MdMenu className="btn-sidebar" onClick={() => this.onSetSidebarOpen(true)} />
          </>
        ) : null}
        <Loader displayed={this.state.loader} />
        {process.env.PAGE_NUMBER && <PageNumber index={this.state.slideInfo.index} />}
        {this.ContentComponent ? (
          <this.ContentComponent
            slides={this.slides}
            terminate={this.terminate}
            currentIndex={this.state.slideInfo.index}
          />
        ) : null}
      </>
    );
  }
}
