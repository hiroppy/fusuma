import { useEffect, useState } from 'react';
import { getSearchParams } from '../utils/getSearchParams';

export function useSidebarComponent(mode) {
  const [Sidebar, setSidebar] = useState(null);

  useEffect(() => {
    (async () => {
      const params = getSearchParams();

      if (mode === 'common' && params.get('sidebar') !== 'false') {
        if (process.env.UI.SIDEBAR === true) {
          const { Sidebar: SidebarComponent } = await import(
            /* webpackPrefetch: true */ '../components/Sidebar'
          );

          setSidebar(SidebarComponent);
        }
      } else {
        setSidebar(null);
      }
    })();
  }, [mode]);

  return Sidebar;
}
