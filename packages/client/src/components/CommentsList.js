import React, { memo, useState, useEffect } from 'react';
import posed, { PoseGroup } from 'react-pose';
import IntlRelativeFormat from 'intl-relativeformat';
import '../../assets/style/commentsList.css';

const Ul = posed.ul({});
const Li = posed.li({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});
const rf = new IntlRelativeFormat();
let ws;

export const CommentsList = memo(() => {
  const [comments, updateComments] = useState([]);

  useEffect(() => {
    if (!ws) {
      ws = new WebSocket(`ws://${window.location.hostname}:${process.env.SERVER_PORT}`);
      ws.onmessage = ({ data }) => {
        const fetchedComments = JSON.parse(data);

        if (Array.isArray(fetchedComments) && fetchedComments.length !== 0) {
          if (fetchedComments[0].message === 'Rate limit exceeded') {
            // TODO: implement
          } else if (fetchedComments[0].message === 'hello:)') {
            // TODO: implement
          } else {
            const convertedComments = fetchedComments.reverse().map((c) => {
              return {
                ...c,
                createdAt: rf.format(c.createdAt)
              };
            });

            // https://github.com/facebook/react/issues/15041#issuecomment-470309576
            updateComments((comments) => comments.concat(convertedComments));
          }
        }
      };
    }
  }, []);

  return (
    <div className="comments-list">
      <div className="comments-list-title">
        <span>{process.env.SEARCH_KEYWORD ? process.env.SEARCH_KEYWORD : 'Private Mode'}</span>
        <span className="comments-list-total">{comments.length} comments</span>
      </div>
      <Ul className="comments-list-ul">
        {/* TODO: don't use div */}
        <div>
          {comments.map(({ id, avatar, text, screenName, createdAt }) => (
            <Li key={id} className="comments-list-li">
              {avatar && <img src={avatar} className="comments-list-li-avatar" />}
              <div className="comments-list-li-body">
                <div className="comments-list-li-body-info">
                  <span className="comments-list-li-screen-name">@{screenName}</span>
                  <span className="comments-list-li-time-ago">{createdAt}</span>
                </div>
                <span className="comments-list-li-comment">{text}</span>
              </div>
            </Li>
          ))}
        </div>
      </Ul>
    </div>
  );
});
