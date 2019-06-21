import React from 'react';
import { Timeline as T, TimelineEvent } from 'react-event-timeline';

export class Timeline extends React.PureComponent {
  constructor() {
    super();

    this.audioRef = null;
  }

  componentDidMount() {
    if (this.audioRef) {
      // react-event-timeline cannot attach an id name
      const elems = document.querySelectorAll('.ReactModalPortal section > div');

      this.audioRef.addEventListener('timeupdate', () => {
        const index = this.calcIndex(this.audioRef.currentTime * 1000);

        // first index is unnecessary
        elems[index].scrollIntoView();
      });
    }
  }

  calcIndex = (baseTime) => {
    let index = 0;

    for (let i = 0; i < this.props.items.length; i++) {
      const { time } = this.props.items[i];

      if (baseTime <= time) {
        index = i;
        break;
      }
    }

    return index;
  };

  render() {
    const { items, url } = this.props;

    return (
      <div className="host-timeline-container">
        {url && (
          <div className="host-timeline-audio">
            <audio
              src={url}
              controls
              ref={(input) => {
                this.audioRef = input;
              }}
            />
          </div>
        )}
        <div className="host-timeline-body">
          <T>
            {items.map(({ title, time, timeStr, Slide, color, Icon }, i) => (
              <TimelineEvent
                key={time}
                title={title}
                createdAt={timeStr}
                iconColor={color}
                icon={Icon}
              >
                {Slide && <Slide />}
              </TimelineEvent>
            ))}
          </T>
        </div>
      </div>
    );
  }
}
