import React, { useEffect, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { createSlidesProps } from '../utils/createSlidesProps';
import { Base } from './ContentView/Base';
import { router } from '../router';
import { setupReveal as initReveal } from '../setup/reveal';

let reveal = null;

export const AppContainer = ({ slides: originalSlides, hash }) => {
  const parsedUrl = new URL(window.location.href);
  const params = parsedUrl.searchParams;
  const isLive = params.get('isLive');
  let index = parsedUrl.hash.match(/^#slide=(.+?)$/);
  index = index !== null ? index[1] - 1 : 0;

  const setCommentsListComponent = async () => {
    const { CommentsList } = await import(/* webpackChunkName: 'live' */ './CommentsList');

    AddCommentsListComponents(CommentsList);
  };

  const setSidebarComponent = async () => {
    const { Sidebar } = await import(
      /* webpackChunkName: 'Sidebar', webpackPrefetch: true */ './Sidebar'
    );

    AddSidebarComponent(Sidebar);
  };

  const changeSidebarState = () => {
    const isSidebar =
      params.get('sidebar') === 'false' || !process.env.SIDEBAR || mode !== 'common' ? false : true;

    updateOpenSidebarStatus(false);
    updateSidebarStatus(isSidebar);
  };

  const setContentViewComponent = async () => {
    if (mode === 'common') {
      AddContentComponent(Base);
    } else {
      const { default: Comp } =
        mode === 'view'
          ? await import(/* webpackChunkName: 'presenter.view' */ './ContentView/View')
          : await import(/* webpackChunkName: 'presenter.host' */ './ContentView/Host');

      AddContentComponent(Comp);
    }
  };

  const goTo = (num) => {
    reveal.slide(num);
  };

  const onSetSidebarOpen = ({ isOpen }) => {
    if (isOpenSidebar !== isOpen) {
      updateOpenSidebarStatus(isOpen);
    }
  };

  const onChangeSlideIndex = (currentIndex) => {
    updateCurrentIndex(currentIndex);
  };

  const onRunPresentationMode = () => {
    reveal = null;
    AddContentComponent(null);
    updateMode('host');
  };

  const terminate = () => {
    reveal = null;
    AddContentComponent(null);
    updateMode('common');
  };

  const initialMode = router();
  const createdProps = createSlidesProps(originalSlides, index);

  const [mode, updateMode] = useState(initialMode); // common, view, host
  const [slides, updateSlides] = useState(createdProps.slides);
  const [contentsList, updateContentsList] = useState(createdProps.contentsList);
  const [isSidebar, updateSidebarStatus] = useState(true);
  const [isOpenSidebar, updateOpenSidebarStatus] = useState(false);
  const [currentIndex, updateCurrentIndex] = useState(index);
  const [SidebarComponent, AddSidebarComponent] = useState(null); // for lazyload
  const [ContentComponent, AddContentComponent] = useState(mode === 'common' ? Base : null);
  const [CommentsListComponent, AddCommentsListComponents] = useState(null); // for lazyload

  const setupReveal = () => {
    if (!reveal) {
      reveal = initReveal();

      reveal.addEventListener('slidechanged', (e) => {
        onChangeSlideIndex(e.indexh);
        // if (process.env.CHART) {
        //   reloadChart();
        // }
      });
    } else {
      return reveal;
    }
  };

  if (!process.env.SSR) {
    if (process.env.NODE_ENV === 'production') {
      setupReveal();
    } else {
      if (mode !== 'view') {
        setTimeout(setupReveal);
      }
    }
  } else {
    useEffect(() => {
      if (!reveal) {
        initReveal();
      }
    }, []);
  }

  // view component is dynamic import
  useEffect(() => {
    if (mode === 'view') {
      if (process.env.NODE_ENV === 'production') {
        setupReveal();
      } else {
        setTimeout(setupReveal, 500);
      }
    }
  }, [ContentComponent]);

  useEffect(() => {
    changeSidebarState();

    if (!SidebarComponent) {
      setSidebarComponent();
    }

    if (mode === 'host') {
      AddCommentsListComponents(null);
    } else if (process.env.IS_LIVE && isLive !== 'false') {
      setCommentsListComponent();
    }

    if (!ContentComponent) {
      setContentViewComponent();
    }
  }, [mode]);

  // for HMR
  if (module.hot || process.env.SSR) {
    const [prevHash, updatePrevHash] = useState(hash);

    if (prevHash !== hash) {
      const createdProps = createSlidesProps(originalSlides);

      updateSlides(createdProps.slides);
      updateContentsList(createdProps.contentsList);
      updatePrevHash(hash);
    }
  }

  return (
    <>
      {isSidebar && (
        <>
          {SidebarComponent && (
            <SidebarComponent
              goTo={goTo}
              isOpen={isOpenSidebar}
              terminate={terminate}
              contents={contentsList}
              onStateChange={onSetSidebarOpen}
              currentIndex={currentIndex}
              totalSlidesNum={slides.length}
              runPresentationMode={onRunPresentationMode}
            />
          )}
          <MdMenu className="btn-sidebar" onClick={() => onSetSidebarOpen({ isOpen: true })} />
        </>
      )}
      {ContentComponent && (
        <ContentComponent
          hash={hash}
          goTo={goTo}
          slides={slides}
          terminate={terminate}
          onChangeSlideIndex={onChangeSlideIndex}
          currentIndex={currentIndex}
        />
      )}
      {CommentsListComponent && <CommentsListComponent />}
    </>
  );
};
