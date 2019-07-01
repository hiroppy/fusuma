import React, { memo, useState, useEffect } from 'react';
import { FaPlay, FaStop, FaRegHourglass } from 'react-icons/fa';
import { formatTime } from '../utils/formatTime';

let current = 0;
let timerId = null;

export const Timer = memo(({ start, stop, reset, disabledStart, disabledStop, disabledReset }) => {
  const [isStop, changeTimerState] = useState(true);
  const [currentTimeStr, updateCurrentTimerStr] = useState('00:00:00');

  const _update = () => {
    current += 1000;
    updateCurrentTimerStr(formatTime(current));
  };

  const _start = () => {
    // it doesn't have to be accurate :)
    timerId = setInterval(() => _update(), 1000);
    changeTimerState(false);
    start();
  };

  const _stop = () => {
    clearInterval(timerId);
    changeTimerState(true);
    timerId = null;
    stop();
  };

  const _reset = () => {
    if (timerId) {
      stop();
    }

    current = 0;
    updateCurrentTimerStr('00:00:00');
    reset();
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, []);

  return (
    <div className="host-timer">
      <FaRegHourglass onClick={_reset} className={disabledReset ? 'disabled' : undefined} />
      {isStop ? (
        <FaPlay onClick={_start} className={disabledStart ? 'disabled' : undefined} />
      ) : (
        <FaStop onClick={_stop} className={disabledStop ? 'disabled' : undefined} />
      )}
      <span>{currentTimeStr}</span>
    </div>
  );
});
