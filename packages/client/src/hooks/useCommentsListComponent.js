import { useEffect, useState } from 'react';
import { getSearchParams } from '../utils/getSearchParams';

export function useCommentsListComponent(mode) {
  const [CommentsList, setCommentsList] = useState(null);

  useEffect(() => {
    if (mode === 'host') {
      (async () => {
        const params = getSearchParams();

        if (process.env.IS_LIVE && params.get('isLive') !== 'false') {
          const { CommentsList: CommentsListComponent } = await import(
            '../components/CommentsList'
          );

          setCommentsList(CommentsListComponent);
        }
      })();
    } else {
      setCommentsList(null);
    }
  });

  return CommentsList;
}
