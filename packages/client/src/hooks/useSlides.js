import { useMemo } from 'react';
import { createSlidesProps } from '../utils/createSlidesProps';

export function useSlidesProps({ originalSlides, hash, currentIndex }) {
  const createdProps = useMemo(() => createSlidesProps(originalSlides, currentIndex), [hash]);
  const slides = useMemo(() => createdProps.slides, [hash]);
  const contentsList = useMemo(() => createdProps.contentsList, [hash]);

  return {
    slides,
    contentsList,
  };
}
