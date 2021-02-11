import React, { useState, useEffect } from 'react';
import { MdMenu } from 'react-icons/md';
import { useCurrentIndex } from '../hooks/useCurrentIndex';
import { useMode } from '../hooks/useMode';
import { useSlidesProps } from '../hooks/useSlides';
import { useContentComponent } from '../hooks/useContentComponent';
import { useSidebarComponent } from '../hooks/useSidebarComponent';

const slideWrapperClassName = '.swiper-container';

export const AppContainer = ({ slides: originalSlides, hash }) => {
  const [isOpenSidebar, updateOpenSidebarStatus] = useState(false);
  const [currentIndex, setCurrentIndex] = useCurrentIndex();
  const { slides, contentsList } = useSlidesProps({ originalSlides, hash, currentIndex });
  const [mode, setMode] = useMode();
  const ContentComponent = useContentComponent(mode);
  const SidebarComponent = useSidebarComponent(mode);

  const goTo = (num) => {
    let nextIndex = num;
    const { swiper } = document.querySelector(slideWrapperClassName);
    const { realIndex } = swiper;

    if (num === '+') {
      nextIndex = Math.min(realIndex + 1, slides.length);
    } else if (num === '-') {
      nextIndex = Math.max(realIndex - 1, 0);
    }

    swiper?.slideTo(nextIndex);
    setCurrentIndex(nextIndex);
  };

  const runPresentationMode = (type) => {
    updateOpenSidebarStatus(false);
    setMode(type === 'start' ? 'host' : 'common');
  };

  useEffect(() => {
    // TODO: add params for presentation iframe
    if (mode === 'common') {
      document.addEventListener('keydown', ({ key }) => {
        if (key === 'ArrowRight') {
          goTo('+');
        } else if (key === 'ArrowLeft') {
          goTo('-');
        }
      });
    }
  }, []);

  return (
    <>
      {SidebarComponent && (
        <>
          <SidebarComponent
            goTo={goTo}
            isOpen={isOpenSidebar}
            totalSlides={slides.length}
            terminate={() => runPresentationMode('terminate')}
            contents={contentsList}
            onStateChange={({ isOpen }) => updateOpenSidebarStatus(isOpen)}
            currentIndex={currentIndex}
            runPresentationMode={() => runPresentationMode('start')}
          />
          <MdMenu className="btn-sidebar" onClick={() => updateOpenSidebarStatus(true)} />
        </>
      )}
      {ContentComponent && (
        <ContentComponent
          hash={hash}
          slides={slides}
          isJumpPage={currentIndex !== 0}
          terminate={() => runPresentationMode('terminate')}
          currentIndex={currentIndex}
          onChangeSlideIndex={setCurrentIndex}
        />
      )}
    </>
  );
};
