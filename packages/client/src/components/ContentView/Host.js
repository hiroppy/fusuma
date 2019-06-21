/**
 * Host for Presentation mode
 */

import React from 'react';
import Modal from 'react-modal';
import {
  FaTimes,
  FaHistory,
  FaCaretDown,
  FaCaretRight,
  FaCaretUp,
  FaMicrophoneAlt,
  FaMicrophoneAltSlash
} from 'react-icons/fa';
import { Controller as PresentationController } from '../presentationMode/Controller'; // common and host
import { Timer } from '../Timer';
import { Timeline } from '../Timeline';
import { formatTime } from '../../utils/formatTime';
import { WebRTC } from '../../utils/webrtc';
import '../../../assets/style/host.css';

Modal.setAppElement('#root');

export default class Host extends React.PureComponent {
  constructor(props) {
    super(props);

    const { origin, pathname } = new URL(window.location);

    this.slides = props.slides; // TODO: separate from current reference
    this.slideUrl = `${origin}/${pathname}?sidebar=false&isLive=false#slide=`;
    this.presentationController = new PresentationController();
    this.presentationApiId = null;
    this.recordedTimeline = [];
    this.recordedStartedTime = 0;
    this.audioUrl = null;

    this.state = {
      usedAudio: false,
      currentSlide: 0,
      isOpenTimeline: false,
      status: 'prepare', // prepare, start, stop
      isEmptyRecordedTimeline: true
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

    this.disposeRecording();
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
    if (this.recordedStartedTime !== 0) {
      const time = new Date().getTime() - this.recordedStartedTime;
      const prevItem = this.recordedTimeline.slice(-1)[0];

      this.recordedTimeline.push({
        slideNum: num + 1,
        time,
        timeStr: `${formatTime(time)} (+${formatTime(time - prevItem.time)})`,
        event: 'changed',
        title: `Moved to the ${num + 1} slide from the ${this.state.currentSlide + 1} slide.`,
        Slide: this.slides[num].slide,
        color: '#3498db',
        Icon: <FaCaretRight size="22" />
      });
    }

    this.setState({ currentSlide: num });
    this.presentationController.changePage(num);
  };

  start = () => {
    if (this.recordedTimeline.length === 0) {
      this.recordedStartedTime = new Date().getTime();
    }

    const time =
      this.recordedTimeline.length === 0 ? 0 : new Date().getTime() - this.recordedStartedTime;

    this.recordedTimeline.push({
      slideNum: this.state.currentSlide + 1,
      time,
      timeStr: formatTime(time),
      event: 'started',
      title: `Started from the ${this.state.currentSlide + 1} slide.`,
      Slide: this.slides[this.state.currentSlide].slide,
      color: '#6fba1c',
      Icon: <FaCaretDown />
    });

    if (this.state.usedAudio) {
      this.webrtc.start();
      this.audioUrl = null;
    }

    this.setState({ status: 'start', isEmptyRecordedTimeline: false });
  };

  stop = async () => {
    const time = new Date().getTime() - this.recordedStartedTime;

    this.recordedTimeline.push({
      slideNum: this.state.currentSlide + 1,
      time,
      timeStr: formatTime(time),
      event: 'stopped',
      title: `Stopped at the ${this.state.currentSlide + 1} slide.`,
      color: '#e9546b',
      Icon: <FaCaretUp />
    });

    if (this.state.usedAudio) {
      this.audioUrl = await this.webrtc.stop();
    }

    this.setState({ status: 'stop' });
  };

  reset = () => {
    this.audioUrl = null;
    this.recordedTimeline = [];
    this.recordedStartedTime = 0;
    this.setState({ status: 'prepare', isEmptyRecordedTimeline: true });
  };

  openTimeline = () => {
    this.setState({ isOpenTimeline: true });
  };

  closeTimeline = () => {
    this.setState({ isOpenTimeline: false });
  };

  setupRecording = () => {
    if (!this.webrtc) {
      try {
        this.webrtc = new WebRTC();
        this.setState({ usedAudio: true });
      } catch (e) {
        alert(e);
      }
    }
  };

  disposeRecording = () => {
    if (this.webrtc) {
      this.webrtc.dispose();
      this.webrtc = null;
    }

    this.setState({ usedAudio: false });
  };

  // prohibit below actions
  //   usedAudio && status === 'start'
  //     modal, reset
  //   usedAudio && status === 'stop' && !isEmptyRecordedTimeline
  //     stop or start
  //   usedAudio && status === 'start'
  //     mic
  render() {
    const index = this.state.currentSlide;

    return (
      <div className="host-container">
        <Modal isOpen={this.state.isOpenTimeline} onRequestClose={this.closeTimeline}>
          <Timeline items={this.recordedTimeline} url={this.audioUrl} />
        </Modal>
        <div className="host-left-box">
          <div className="host-note">
            {this.slides && (
              <pre dangerouslySetInnerHTML={{ __html: this.slides[index].fusumaProps.note }} />
            )}
          </div>
        </div>
        <div className="host-right-box">
          <div className="host-slide-layer">
            <h2>Current</h2>
            <iframe
              src={`${this.slideUrl.replace(/slide=(\d?)/, `slide=${index + 1}`)}`}
              width="100%"
              height="100%"
            />
          </div>
          <div className="host-slide-layer">
            <h2>Next</h2>
            <iframe
              src={`${this.slideUrl.replace(/slide=(\d?)/, `slide=${index + 2}`)}`}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="host-bottom-box">
          <FaTimes onClick={this.terminate} className="terminate-button" />
          <div className="host-bottom-box-info">
            <Timer
              start={this.start}
              stop={this.stop}
              reset={this.reset}
              disabledStart={
                this.state.status === 'stop' &&
                this.state.usedAudio &&
                !this.start.isEmptyRecordedTimeline
              }
              disabledStop={
                this.state.status === 'stop' &&
                this.state.usedAudio &&
                !this.start.isEmptyRecordedTimeline
              }
              disabledReset={this.state.status === 'start' && this.state.usedAudio}
            />
            <span className="current-slide-num">
              {/* TODO: fix */}
              {`${index + 1}`.padStart(2, '0')} / {`${this.slides.length}`.padStart(2, '0')}
            </span>
            <FaHistory
              onClick={this.openTimeline}
              size={18}
              className={
                (this.state.status === 'start' && this.state.usedAudio) ||
                this.state.isEmptyRecordedTimeline
                  ? 'disabled'
                  : undefined
              }
            />
            {this.state.usedAudio ? (
              <FaMicrophoneAlt
                onClick={this.disposeRecording}
                className={
                  this.state.status === 'start' || !this.state.isEmptyRecordedTimeline
                    ? 'disabled'
                    : undefined
                }
                size={20}
                color="#6fba1c"
              />
            ) : (
              <FaMicrophoneAltSlash
                onClick={this.setupRecording}
                className={
                  this.state.status === 'start' || !this.state.isEmptyRecordedTimeline
                    ? 'disabled'
                    : undefined
                }
                size={20}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
