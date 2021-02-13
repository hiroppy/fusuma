import React, { useState, useEffect } from 'react';
import { MdMenu } from 'react-icons/md';
import { useContentComponent } from '../hooks/useContentComponent';
import { useSidebarComponent } from '../hooks/useSidebarComponent';
import { useSlides, addSlides } from '../context/slides';

export const AppContainer = ({ slidesProps }) => {
  const [isOpenSidebar, updateOpenSidebarStatus] = useState(false);
  const {
    state: { mode },
    dispatch,
  } = useSlides();
  const ContentComponent = useContentComponent(mode);
  const SidebarComponent = useSidebarComponent(mode);

  useEffect(() => {
    dispatch(addSlides(slidesProps));
  }, [slidesProps]);

  useEffect(() => {
    if (mode !== 'common' && isOpenSidebar) {
      updateOpenSidebarStatus(false);
    }
  }, [mode, isOpenSidebar]);

  return (
    <>
      {SidebarComponent && (
        <>
          <SidebarComponent
            isOpen={isOpenSidebar}
            onStateChange={({ isOpen }) => updateOpenSidebarStatus(isOpen)}
          />
          <MdMenu className="btn-sidebar" onClick={() => updateOpenSidebarStatus(true)} />
        </>
      )}
      {ContentComponent && <ContentComponent />}
    </>
  );
};
