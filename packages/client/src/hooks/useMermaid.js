import { useEffect, useState } from 'react';
import { getSearchParams } from '../utils/getSearchParams';

export function useMermaid() {
  const [mermaid, setMermaid] = useState(null);

  if (process.env.CHART && !getSearchParams().get('ssr')) {
    useEffect(() => {
      (async () => {
        const { Mermaid } = await import('../setup/Mermaid');
        const m = new Mermaid();

        m.init();
        setMermaid(m);
      })();
    }, []);
  }

  return [mermaid];
}
