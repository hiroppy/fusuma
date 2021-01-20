import { useEffect, useState } from 'react';

function getModeFromUrl() {
  if (location.search.includes('presenter=host')) return 'host';
  if (location.search.includes('presenter=view')) return 'view';
  return 'common';
}

export function useMode() {
  const [mode, setMode] = useState(getModeFromUrl());

  useEffect(() => {
    setMode(mode);
  }, [setMode]);

  return [mode, setMode];
}
