import { useEffect, useState } from 'react';

function getIndexFromUrl() {
  const parsedUrl = new URL(window.location.href);
  const index = parsedUrl.hash.match(/^#slide=(.+?)$/);

  return index !== null ? index[1] - 1 : 0;
}

export function useCurrentIndex() {
  const [index, setCurrentIndex] = useState(getIndexFromUrl());

  useEffect(() => {
    setCurrentIndex(index);
  }, [setCurrentIndex]);

  return [index, setCurrentIndex];
}
