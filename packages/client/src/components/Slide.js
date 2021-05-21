import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Prism } from '../setup/prism';
import { getSearchParams } from '../utils/getSearchParams';
import { createVMEnv } from '../utils/createVMEnv';
import { useMermaid } from '../hooks/useMermaid';

export const Slide = ({ slide }) => {
  const [isShow, setIsShow] = useState(false);
  const [mermaid] = useMermaid();
  const { slide: SlideComponent, fusumaProps } = slide;

  if (import.meta.webpackHot) {
    setTimeout(() => {
      if (process.env.CHART) {
        mermaid?.reload();
      }
      Prism.highlightAll();
    }, 0);
  }

  useEffect(() => {
    Prism.highlightAll();

    if (process.env.CHART) {
      mermaid?.reload();
    }
    setIsShow(true);
  }, []);

  return (
    <div
      className={classnames(
        'slide-box',
        fusumaProps.classes,
        fusumaProps.sectionTitle ? 'section-title' : undefined
      )}
    >
      {fusumaProps.background && (
        <div className="slide-background" style={fusumaProps.background} />
      )}
      <div className="slide-internal-box">{isShow && <SlideComponent />}</div>
    </div>
  );
};
