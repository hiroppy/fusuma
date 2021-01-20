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
  const initialMode = router();
  const createdProps = createSlidesProps(originalSlides, index);
  const [mode, updateMode] = useState(initialMode); // common, view, host
  const [slides, updateSlides] = useState(createdProps.slides);
  const [contentsList, updateContentsList] = useState(createdProps.contentsList);
  const [isOpenSidebar, updateOpenSidebarStatus] = useState(false);
  const [currentIndex, updateCurrentIndex] = useState(index);
  const [ContentComponent, AddContentComponent] = useState(mode === 'common' ? Base : undefined);

  // for lazyload components
  const [SidebarComponent, AddSidebarComponent] = useState(null);
  const [CommentsListComponent, AddCommentsListComponents] = useState(null);

  const setCommentsListComponent = async () => {
    const { CommentsList } = await import('./CommentsList');

    AddCommentsListComponents(CommentsList);
  };

  const setSidebarComponent = async () => {
    const { Sidebar } = await import(/* webpackPrefetch: true */ './Sidebar');

    AddSidebarComponent(Sidebar);
  };

  const setContentViewComponent = async () => {
    if (mode === 'common') {
      AddContentComponent(Base);
    } else {
      const { default: Comp } =
        mode === 'view' ? await import('./ContentView/View') : await import('./ContentView/Host');

      AddContentComponent(Comp);
    }
  };

  const goTo = (num) => {
    if (window.slide) {
      window.slide.goToSlide(num);
    }
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

  useEffect(() => {
    const isSidebar =
      params.get('sidebar') === 'false' || !process.env.SIDEBAR || mode !== 'common' ? false : true;

    if (isSidebar && !SidebarComponent) {
      setSidebarComponent();
    }

    if (!ContentComponent) {
      setContentViewComponent();
    }

    if (mode === 'host') {
      AddCommentsListComponents(null);
    } else if (process.env.IS_LIVE && isLive !== 'false') {
      setCommentsListComponent();
    }
  }, [mode]);

  // for HMR
  if (import.meta.webpackHot || process.env.SSR) {
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
      {SidebarComponent && (
        <>
          <SidebarComponent
            goTo={goTo}
            isOpen={isOpenSidebar}
            terminate={terminate}
            contents={contentsList}
            onStateChange={({ isOpen }) => updateOpenSidebarStatus(isOpen)}
            currentIndex={currentIndex}
            runPresentationMode={onRunPresentationMode}
          />
          <MdMenu className="btn-sidebar" onClick={() => updateOpenSidebarStatus(true)} />
        </>
      )}
      {ContentComponent && (
        <ContentComponent
          hash={hash}
          slides={slides}
          isJumpPage={isJumpPage}
          terminate={terminate}
          currentIndex={currentIndex}
          onChangeSlideIndex={updateCurrentIndex}
        />
      )}
      {CommentsListComponent && <CommentsListComponent />}
    </>
  );
};
