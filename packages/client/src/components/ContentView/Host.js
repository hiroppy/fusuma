/**
 * Host for Presentation mode
 */

import React, { memo, useState, useEffect } from 'react';
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
import { MdZoomOutMap } from 'react-icons/md';
import { Controller as PresentationController } from '../../presentationMode/Controller'; // common and host
import { Canvas, emitCanvasEvent } from '../Canvas';
import { Timer } from '../Timer';
import { Timeline } from '../Timeline';
import { formatTime } from '../../utils/formatTime';
import { WebRTC } from '../../utils/webrtc';
import '../../../assets/style/host.css';

Modal.setAppElement('#root');

const Iframe = ({ slideUrl, slideIndex }) => (
  <iframe
    src={`${slideUrl.replace(/slide=(\d?)/, `slide=${slideIndex}`)}`}
    width="100%"
    height="100%"
  />
);

let webrtc = null;
let slideUrl = null;
let presentationController = null;
let presentationApiId = null;
let recordedTimeline = [];
let recordedStartedTime = 0;
let audioUrl = null;

const Host = memo(({ slides, currentIndex, terminate, onChangeSlideIndex }) => {
  if (!presentationController) {
    const { origin, pathname } = new URL(window.location);

    slideUrl = `${origin}/${pathname}?sidebar=false&isLive=false#slide=`;
    presentationController = new PresentationController();
  }

  const [status, updateStatus] = useState('prepare'); // prepare, start, stop
  const [usedAudio, updateAudioStatus] = useState(false);
  const [isOpenTimeline, updateOpenTimelineStatus] = useState(false);
  const [isEmptyRecordedTimeline, updateEmptyRecordedTimelineStatus] = useState(true);
  const [isOpenZoomSlide, updateOpenZoomSlideStatus] = useState(false);

  const _terminate = () => {
    try {
      terminate();

      if (presentationController) {
        presentationController.terminate();
        presentationController = null;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const changeCurrentSlide = (num) => {
    if (status === 'start') {
      const time = new Date().getTime() - recordedStartedTime;
      const prevItem = recordedTimeline.slice(-1)[0];

      recordedTimeline.push({
        slideNum: num + 1,
        time,
        timeStr: `${formatTime(time)} (+${formatTime(time - prevItem.time)})`,
        event: 'changed',
        title: `Moved to the ${num + 1} slide from the ${num} slide.`,
        Slide: slides[num].slide,
        color: '#3498db',
        Icon: <FaCaretRight size="22" />
      });
    }

    onChangeSlideIndex(num);
    presentationController.changePage(num);
  };

  const start = () => {
    if (recordedTimeline.length === 0) {
      recordedStartedTime = new Date().getTime();
    }

    const time = recordedTimeline.length === 0 ? 0 : new Date().getTime() - recordedStartedTime;

    recordedTimeline.push({
      slideNum: currentIndex + 1,
      time,
      timeStr: formatTime(time),
      event: 'started',
      title: `Started from the ${currentIndex + 1} slide.`,
      Slide: slides[currentIndex].slide,
      color: '#6fba1c',
      Icon: <FaCaretDown />
    });

    if (usedAudio) {
      webrtc.startRecording();
      audioUrl = null;
    }

    updateEmptyRecordedTimelineStatus(false);
    updateStatus('start');
  };

  const stop = async () => {
    const time = new Date().getTime() - recordedStartedTime;

    recordedTimeline.push({
      slideNum: currentIndex + 1,
      time,
      timeStr: formatTime(time),
      event: 'stopped',
      title: `Stopped at the ${currentIndex + 1} slide.`,
      color: '#e9546b',
      Icon: <FaCaretUp />
    });

    if (usedAudio) {
      audioUrl = await webrtc.stopRecording();
    }

    updateStatus('stop');
  };

  const reset = () => {
    audioUrl = null;
    recordedTimeline = [];
    recordedStartedTime = 0;
    updateStatus('prepare');
    updateEmptyRecordedTimelineStatus(true);
  };

  const openTimeline = () => {
    updateOpenTimelineStatus(true);
  };

  const closeTimeline = () => {
    updateOpenTimelineStatus(false);
  };

  const setupRecording = () => {
    if (!webrtc) {
      try {
        webrtc = new WebRTC();
        webrtc.setupRecording();
        updateAudioStatus(true);
      } catch (e) {
        alert(e);
      }
    }
  };

  const disposeRecording = () => {
    if (webrtc) {
      webrtc.disposeRecording();
      webrtc = null;
    }

    updateAudioStatus(false);
  };

  const openZoomSlide = () => {
    updateOpenZoomSlideStatus(true);
    emitCanvasEvent({ status: 'start' });
  };

  const closeZoomSlide = () => {
    updateOpenZoomSlideStatus(false);
    emitCanvasEvent({ status: 'stop' });
  };

  useEffect(() => {
    async function openView() {
      try {
        if (!presentationController) {
          throw new Error('Not found PresenterController.');
        }
        presentationApiId = await presentationController.openView();
      } catch (e) {
        console.error(e);
      }
    }

    openView();

    return () => {
      document.onkeyup = null;

      if (presentationController) {
        _terminate();
      }

      disposeRecording();
    };
  }, []);

  useEffect(() => {
    document.onkeyup = (e) => {
      if (e.key === 'ArrowLeft') {
        changeCurrentSlide(Math.max(0, currentIndex - 1));
      } else if (e.key === 'ArrowRight') {
        changeCurrentSlide(Math.min(slides.length - 1, currentIndex + 1));
      }
    };
  });

  // prohibit below actions
  //   usedAudio && status === 'start'
  //     modal, reset
  //   usedAudio && status === 'stop' && !isEmptyRecordedTimeline
  //     stop or start
  //   usedAudio && status === 'start'
  //     mic
  return (
    <div className="host-container">
      <Modal isOpen={isOpenTimeline} onRequestClose={closeTimeline}>
        <Timeline items={recordedTimeline} url={audioUrl} />
      </Modal>
      <div className="host-left-box">
        <div className="host-note">
          {slides && (
            <pre
              dangerouslySetInnerHTML={{
                __html: slides[currentIndex].fusumaProps.note
              }}
            />
          )}
        </div>
      </div>
      <div className="host-right-box">
        <div className="host-slide-layer">
          <h2>Current</h2>
          <MdZoomOutMap size={28} onClick={openZoomSlide} />
          <Iframe slideUrl={slideUrl} slideIndex={currentIndex + 1} />
        </div>
        <Modal isOpen={isOpenZoomSlide} onRequestClose={closeZoomSlide}>
          {isOpenZoomSlide && (
            <div className="host-slide-canvas">
              <Canvas toolbar hideGrid />
              <Iframe slideUrl={slideUrl} slideIndex={currentIndex + 1} />
            </div>
          )}
        </Modal>
        <div className="host-slide-layer">
          <h2>Next</h2>
          <Iframe slideUrl={slideUrl} slideIndex={currentIndex + 2} />
        </div>
      </div>
      <div className="host-bottom-box">
        <FaTimes onClick={_terminate} className="terminate-button" />
        <div className="host-bottom-box-info">
          <Timer
            start={start}
            stop={stop}
            reset={reset}
            disabledStart={status === 'stop' && usedAudio && !start.isEmptyRecordedTimeline}
            disabledStop={status === 'stop' && usedAudio && !start.isEmptyRecordedTimeline}
            disabledReset={status === 'start' && usedAudio}
          />
          <span className="current-slide-num">
            {/* TODO: fix */}
            {`${currentIndex + 1}`.padStart(2, '0')} / {`${slides.length}`.padStart(2, '0')}
          </span>
          <FaHistory
            onClick={openTimeline}
            size={18}
            className={
              (status === 'start' && usedAudio) || isEmptyRecordedTimeline ? 'disabled' : undefined
            }
          />
          {usedAudio ? (
            <FaMicrophoneAlt
              onClick={disposeRecording}
              className={status === 'start' || !isEmptyRecordedTimeline ? 'disabled' : undefined}
              size={20}
              color="#6fba1c"
            />
          ) : (
            <FaMicrophoneAltSlash
              onClick={setupRecording}
              className={status === 'start' || !isEmptyRecordedTimeline ? 'disabled' : undefined}
              size={20}
            />
          )}
        </div>
      </div>
    </div>
  );
});

export default Host;
