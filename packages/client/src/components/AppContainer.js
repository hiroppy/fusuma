import { useEffect, useMemo, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { createSlidesProps } from '../utils/createSlidesProps';
import { getSearchParams } from '../utils/getSearchParams';
import { Base } from './ContentView/Base';
import { useCurrentIndex } from '../hooks/useCurrentIndex';
import { useMode } from '../hooks/useMode';
import { useContentComponent } from '../hooks/useContentComponent';
import { useSidebarComponent } from '../hooks/useSidebarComponent';
import { useCommentsListComponent } from '../hooks/useCommentsListComponent';

export const AppContainer = ({ slides: originalSlides, hash }) => {
  const [isOpenSidebar, updateOpenSidebarStatus] = useState(false);
  const [currentIndex, setCurrentIndex] = useCurrentIndex();
  const createdProps = useMemo(() => createSlidesProps(originalSlides, currentIndex), [hash]);
  const slides = useMemo(() => createdProps.slides, [hash]);
  const contentsList = useMemo(() => createdProps.contentsList, [hash]);
  const [mode, setMode] = useMode();
  const ContentComponent = useContentComponent(mode);
  const SidebarComponent = useSidebarComponent(mode);
  const CommentsListComponent = useCommentsListComponent(mode);

  const goTo = (num) => {
    if (window.slide) {
      window.slide.goToSlide(num);
      setCurrentIndex(num);
    }
  };

  const onRunPresentationMode = () => {
    window.slide = null;
    updateOpenSidebarStatus(false);
    setMode('host');
  };

  const terminate = () => {
    window.slide = null;
    updateOpenSidebarStatus(false);
    setMode('common');
  };

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
          isJumpPage={currentIndex !== 0}
          terminate={terminate}
          currentIndex={currentIndex}
          onChangeSlideIndex={setCurrentIndex}
        />
      )}
      {CommentsListComponent && <CommentsListComponent />}
    </>
  );
};
