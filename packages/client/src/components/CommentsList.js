import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import IntlRelativeFormat from 'intl-relativeformat';
import '../../assets/style/commentsList.css';

const Ul = posed.ul({});
const Li = posed.li({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});
const rf = new IntlRelativeFormat();

export class CommentsList extends React.Component {
  constructor() {
    super();

    const { hostname } = window.location;

    this.state = {
      comments: []
    };

    this.ws = new WebSocket(`ws://${hostname}:${process.env.SERVER_PORT}`);
    this.listenWS();

    var output = rf.format(new Date());
    console.log(output); // => "now"
  }

  listenWS() {
    this.ws.onmessage = ({ data }) => {
      const comments = JSON.parse(data);

      if (Array.isArray(comments) && comments.length !== 0) {
        if (comments[0].message === 'Rate limit exceeded') {
          // TODO: implement
        } else if (comments[0].message === 'hello:)') {
          // TODO: implement
        } else {
          const convertedComments = comments.reverse().map((c) => {
            return {
              ...c,
              createdAt: rf.format(c.createdAt)
            };
          });

          this.setState({
            comments: [...this.state.comments, ...convertedComments]
          });
        }
      }
    };
  }

  render() {
    return (
      <div className="comments-list">
        <div className="comments-list-title">
          <span>{process.env.SEARCH_KEYWORD ? process.env.SEARCH_KEYWORD : 'Private Mode'}</span>
          <span className="comments-list-total">{this.state.comments.length} comments</span>
        </div>
        <Ul className="comments-list-ul">
          {/* TODO: don't use div */}
          <div>
            {this.state.comments.map(({ id, avatar, text, screenName, createdAt }) => (
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
  }
}
