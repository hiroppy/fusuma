import { useMemo } from 'react';
import { createSlidesProps } from '../utils/createSlidesProps';

export function useSlidesProps({ originalSlides, hash, currentIndex }) {
  return useMemo(() => createSlidesProps(originalSlides, currentIndex), [hash]);
}
