import { useEffect, useState } from 'react';
import { getSearchParams } from '../utils/getSearchParams';

export function useSidebarComponent(mode) {
  const [Sidebar, setSidebar] = useState(null);

  useEffect(() => {
    (async () => {
      if (mode === 'common') {
        const params = getSearchParams();
        const isSidebar = params.get('sidebar') !== 'false' || process.env.SIDEBAR === 'true';

        if (isSidebar) {
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
