import React, { useEffect, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { createSlidesProps } from '../utils/createSlidesProps';
import { Base } from './ContentView/Base';
import { router } from '../router';

export const AppContainer = ({ slides: originalSlides, hash }) => {
  const parsedUrl = new URL(window.location.href);
  const params = parsedUrl.searchParams;
  const isLive = params.get('isLive');
  let index = parsedUrl.hash.match(/^#slide=(.+?)$/);
  index = index !== null ? index[1] - 1 : 0;
  const isJumpPage = index !== 0;

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
    if (window.slide) {
      window.slide.goToSlide(num);
    }
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
    window.slide = null;
    AddContentComponent(null);
    updateMode('host');
  };

  const terminate = () => {
    window.slide = null;
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
  const [ContentComponent, AddContentComponent] = useState(mode === 'common' ? Base : undefined);
  const [CommentsListComponent, AddCommentsListComponents] = useState(null); // for lazyload

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
              runPresentationMode={onRunPresentationMode}
            />
          )}
          <MdMenu className="btn-sidebar" onClick={() => onSetSidebarOpen({ isOpen: true })} />
        </>
      )}
      {ContentComponent && (
        <ContentComponent
          hash={hash}
          slides={slides}
          isJumpPage={isJumpPage}
          terminate={terminate}
          currentIndex={currentIndex}
          onChangeSlideIndex={onChangeSlideIndex}
        />
      )}
      {CommentsListComponent && <CommentsListComponent />}
    </>
  );
};
