import React, { useRef, useEffect } from 'react';
import { Timeline as T, TimelineEvent } from 'react-event-timeline';

export const Timeline = ({ items, url }) => {
  const audioRef = useRef();
  const calcIndex = (baseTime) => {
    let index = 0;

    for (let i = 0; i < items.length; i++) {
      const { time } = items[i];

      if (baseTime <= time) {
        index = i;
        break;
      }
    }

    return index;
  };

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      // Chrome bug: https://bugs.chromium.org/p/chromium/issues/detail?id=642012
      const getBlobDuration = async () => {
        return new Promise((resolve) => {
          audio.addEventListener('loadedmetadata', () => {
            if (audio.duration === Infinity) {
              audio.currentTime = Number.MAX_SAFE_INTEGER;

              const listener = () => {
                audio.currentTime = 0;
                audio.removeEventListener('timeupdate', listener);
                resolve();
              };
              audio.addEventListener('timeupdate', listener);
            }
          });
        });
      };

      // react-event-timeline doesn't have id name
      const elems = document.querySelectorAll('.ReactModalPortal section > div');

      getBlobDuration();

      {
        // Audio will somehow jump to the end on the first run
        // so, currentTime must be reset in the first playing.
        // It doesn't seem good even if it initializes in getBlobDuration
        let flag = false;

        audio.addEventListener('playing', () => {
          if (!flag) {
            audio.currentTime = 0;
            flag = true;
          }
        });
      }

      audio.addEventListener('timeupdate', () => {
        const index = calcIndex(audio.currentTime * 1000);

        // first index is unnecessary
        // firefox doesn't work
        elems[index].scrollIntoView();
      });
    }
  }, []);

  return (
    <div className="host-timeline-container">
      {url && (
        <div className="host-timeline-audio">
          <audio src={url} controls ref={audioRef} />
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
};
