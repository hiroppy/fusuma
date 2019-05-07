/**
 * Host for Presentation mode
 */

import React from 'react';
import { FaTimes, FaPlay, FaStop, FaRegHourglass } from 'react-icons/fa';
import { Controller as PresentationController } from '../presentationMode/Controller'; // common and host
import { Base } from './Base';
import '../../../assets/style/host.css';

class Timer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isStop: true,
      currentTimeStr: '00:00:00'
    };

    this.current = 0;
    this.timerId = null;
    this.presentationController = new PresentationController();
  }

  changeTimerState = (state) => {
    this.setState({ isStop: state });
  };

  start = () => {
    // it doesn't have to be accurate :)
    this.timerId = setInterval(() => this.update(), 1000);
    this.changeTimerState(false);
  };

  stop = () => {
    clearInterval(this.timerId);
    this.changeTimerState(true);
  };

  reset = () => {
    this.stop();
    this.current = 0;
    this.setState({ currentTimeStr: '00:00:00' });
  };

  update = () => {
    this.current += 1000;

    // https://stackoverflow.com/questions/19700283/how-to-convert-time-milliseconds-to-hours-min-sec-format-in-javascript
    const milliseconds = parseInt((this.current % 1000) / 100);
    const seconds = Math.floor((this.current / 1000) % 60)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((this.current / (1000 * 60)) % 60)
      .toString()
      .padStart(2, '0');
    const hours = Math.floor((this.current / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, '0');

    this.setState({ currentTimeStr: `${hours}:${minutes}:${seconds}` });
  };

  render() {
    return (
      <div className="host-timer">
        <FaRegHourglass onClick={this.reset} />
        {this.state.isStop ? <FaPlay onClick={this.start} /> : <FaStop onClick={this.stop} />}
        <span>{this.state.currentTimeStr}</span>
      </div>
    );
  }
}

export default class Host extends React.PureComponent {
  constructor(props) {
    super(props);

    this.slides = props.slides; // TODO: separate from current reference
    this.slideUrl = `${window.location.origin}?sidebar=false#slide=`;
    this.presentationController = new PresentationController();
    this.presentationApiId = null;

    this.state = {
      currentSlide: 0
    };

    document.onkeyup = (e) => {
      if (e.key === 'ArrowLeft') {
        this.changeCurrentSlide(Math.max(0, this.state.currentSlide - 1));
      } else if (e.key === 'ArrowRight') {
        this.changeCurrentSlide(Math.min(this.slides.length - 1, this.state.currentSlide + 1));
      }
    };
  }

  async componentDidMount() {
    try {
      this.presentationApiId = await this.presentationController.openView();
    } catch (e) {
      console.error(e);
    }
  }

  componentWillUnmount() {
    document.onkeyup = null;

    if (this.presentationController) {
      this.terminate();
    }
  }

  terminate = () => {
    try {
      this.props.terminate();
      if (this.presentationController) this.presentationController.terminate();
      this.presentationController = null;
    } catch (e) {
      console.error(e);
    }
  };

  changeCurrentSlide = (num) => {
    this.setState({ currentSlide: num });
    this.presentationController.changePage(num);
  };

  render() {
    const index = this.state.currentSlide;

    return (
      <div className="host-container">
        <div className="host-left-box">
          <div className="host-note">
            {this.slides && <pre>{this.slides[index].meta.note}</pre>}
          </div>
        </div>
        <div className="host-right-box">
          <div className="host-slide-layer">
            <h2>Current</h2>
            <iframe src={`${this.slideUrl}${index + 1}`} width="100%" height="100%" />
          </div>
          <div className="host-slide-layer">
            <h2>Next</h2>
            <iframe src={`${this.slideUrl}${index + 2}`} width="100%" height="100%" />
          </div>
        </div>
        <div className="host-bottom-box">
          <FaTimes onClick={this.terminate} className="terminate-button" />
          <div className="host-bottom-box-info">
            <Timer />
            <span className="current-slide-num">
              {index + 1} / {this.slides.length}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
