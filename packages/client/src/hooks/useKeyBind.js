import { useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export function useKeyBind(keys) {
  const keyboardListener = useDebouncedCallback(({ key }) => {
    if (keys[key]) {
      keys[key]();
    }
  }, 100);

  useEffect(() => {
    document.addEventListener('keydown', keyboardListener);

    return () => {
      document.removeEventListener('keydown', keyboardListener);
    };
  }, []);
}
