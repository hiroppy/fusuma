import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import '../../assets/style/commentsList.css';

const Ul = posed.ul({});
const Li = posed.li({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export class CommentsList extends React.Component {
  constructor() {
    super();

    const { hostname } = window.location;

    this.state = {
      comments: []
    };

    this.ws = new WebSocket(`ws://${hostname}:${process.env.SERVER_PORT}`);
    this.listenWS();
  }

  listenWS() {
    this.ws.onmessage = ({ data }) => {
      const comments = JSON.parse(data);

      console.log(comments);

      if (Array.isArray(comments) && comments.length !== 0) {
        if (comments[0].message === 'Rate limit exceeded') {
          // TODO: implement
        } else if (comments[0].message === 'hello:)') {
          // TODO: implement
        } else {
          this.setState({
            comments: [...this.state.comments, ...comments]
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
            {this.state.comments.map(({ id, avatar, text }) => (
              <Li key={id} className="comments-list-li">
                {avatar && <img src={avatar} className="comments-list-avatar" />}
                <span className="comments-list-comment">{text}</span>
              </Li>
            ))}
          </div>
        </Ul>
      </div>
    );
  }
}
