import React from 'react';
import { Timeline as T, TimelineEvent } from 'react-event-timeline';

export class Timeline extends React.PureComponent {
  constructor() {
    super();

    this.audioRef = null;
  }

  // Chrome bug: https://bugs.chromium.org/p/chromium/issues/detail?id=642012
  async getBlobDuration() {
    return new Promise((resolve) => {
      this.audioRef.addEventListener('loadedmetadata', () => {
        if (this.audioRef.duration === Infinity) {
          this.audioRef.currentTime = Number.MAX_SAFE_INTEGER;

          const listener = () => {
            this.audioRef.currentTime = 0;
            this.audioRef.removeEventListener('timeupdate', listener);
            resolve();
          };
          this.audioRef.addEventListener('timeupdate', listener);
        }
      });
    });
  }

  async componentDidMount() {
    if (this.audioRef) {
      // react-event-timeline cannot attach an id name
      const elems = document.querySelectorAll('.ReactModalPortal section > div');

      await this.getBlobDuration();

      {
        // Audio will somehow jump to the end on the first run
        // so, currentTime must be reset in the first playing.
        // It doesn't seem good even if it initializes in getBlobDuration
        let flag = false;

        this.audioRef.addEventListener('playing', () => {
          if (!flag) {
            this.audioRef.currentTime = 0;
            flag = true;
          }
        });
      }

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
