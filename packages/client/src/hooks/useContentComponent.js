import { useEffect, useState } from 'react';
import { Base } from '../components/ContentView/Base';

export function useContentComponent(mode) {
  const [ContentComponent, setContentComponent] = useState(Base);

  useEffect(() => {
    (async () => {
      if (mode === 'common') {
        setContentComponent(Base);
      } else if (mode === 'view') {
        const { default: Comp } = await import('../components/ContentView/View');

        setContentComponent(Comp);
      } else if (mode === 'host') {
        const { default: Comp } = await import('../components/ContentView/Host');

        setContentComponent(Comp);
      }
    })();
  }, [mode]);

  return ContentComponent;
}
