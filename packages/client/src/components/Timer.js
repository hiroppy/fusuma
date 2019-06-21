import React from 'react';
import { FaPlay, FaStop, FaRegHourglass } from 'react-icons/fa';
import { formatTime } from '../utils/formatTime';

export class Timer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isStop: true,
      currentTimeStr: '00:00:00'
    };
    this.current = 0;
    this.timerId = null;
  }

  changeTimerState = (state) => {
    this.setState({ isStop: state });
  };

  start = () => {
    // it doesn't have to be accurate :)
    this.timerId = setInterval(() => this.update(), 1000);
    this.changeTimerState(false);
    this.props.start();
  };

  stop = () => {
    clearInterval(this.timerId);
    this.changeTimerState(true);
    this.timerId = null;
    this.props.stop();
  };

  reset = () => {
    if (this.timerId) {
      this.stop();
    }

    this.current = 0;
    this.setState({ currentTimeStr: '00:00:00' });
    this.props.reset();
  };

  update = () => {
    this.current += 1000;

    this.setState({ currentTimeStr: formatTime(this.current) });
  };

  render() {
    return (
      <div className="host-timer">
        <FaRegHourglass
          onClick={this.reset}
          className={this.props.disabledReset ? 'disabled' : undefined}
        />
        {this.state.isStop ? (
          <FaPlay
            onClick={this.start}
            className={this.props.disabledStart ? 'disabled' : undefined}
          />
        ) : (
          <FaStop
            onClick={this.stop}
            className={this.props.disabledStop ? 'disabled' : undefined}
          />
        )}
        <span>{this.state.currentTimeStr}</span>
      </div>
    );
  }
}
