import React, { memo, useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { Grid, Box, Text } from '@chakra-ui/react';
import {
  FaTimes,
  FaHistory,
  FaCaretDown,
  FaCaretRight,
  FaCaretUp,
  FaMicrophoneAlt,
  FaMicrophoneAltSlash,
} from 'react-icons/fa';
import { useSlides, setMode, updateCurrentIndex, resetState } from '../../context/slides';
import { PresenterProvider } from '../../context/presenter';
import { Controller as PresentationController } from '../../presentationMode/Controller'; // common and host
import { Timer } from '../Timer';
import { Timeline } from '../Timeline';
import { formatTime } from '../../utils/formatTime';
import { WebRTC } from '../../utils/webrtc';
import '../../../assets/style/host.css';
import { Slide } from '../Slide';
import { useKeyBind } from '../../hooks/useKeyBind';

let recordedTimeline = [];
let recordedStartedTime = 0;

const Host = () => {
  const {
    state: { slides, currentIndex, currentFragmentSteps },
    dispatch: dispatchSlides,
  } = useSlides();
  const [slideUrl, setSlideUrl] = useState(null);
  const [status, setStatus] = useState('prepare'); // prepare, start, stop
  const [presentationController, setPresentationController] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [usedAudio, setUsedAudio] = useState(false);
  const [webrtc, setWebrtc] = useState(null);
  const [isOpenTimeline, setOpenTimelineStatus] = useState(false);
  const [isEmptyRecordedTimeline, setEmptyRecordedTimelineStatus] = useState(true);
  const presentationControllerRef = useRef(presentationController);

  const terminate = () => {
    try {
      if (presentationController) {
        presentationController.terminate();
        setPresentationController(null);
      }
    } catch (e) {
      console.error(e);
    } finally {
      dispatchSlides(setMode('common'));
    }
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
      Icon: <FaCaretDown />,
    });

    if (usedAudio) {
      webrtc.startRecording();
      setAudioUrl(null);
    }

    setEmptyRecordedTimelineStatus(false);
    setStatus('start');
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
      Icon: <FaCaretUp />,
    });

    if (usedAudio) {
      setAudioUrl(await webrtc.stopRecording());
    }

    setStatus('stop');
  };

  const reset = () => {
    setAudioUrl(null);
    recordedTimeline = [];
    recordedStartedTime = 0;
    setStatus('prepare');
    setEmptyRecordedTimelineStatus(true);
  };

  const setupRecording = () => {
    if (!webrtc) {
      setWebrtc(new WebRTC());
      setUsedAudio(true);
    }
  };

  const disposeRecording = () => {
    if (webrtc) {
      webrtc.disposeRecording();
      setWebrtc(null);
    }
    setUsedAudio(false);
  };

  useKeyBind({
    ArrowLeft: () => {
      dispatchSlides(updateCurrentIndex('-'));
      presentationControllerRef.current.changePage('-');
    },
    ArrowRight: () => {
      dispatchSlides(updateCurrentIndex('+'));
      presentationControllerRef.current.changePage('+');
    },
  });

  useEffect(() => {
    webrtc?.setupRecording();
  }, [webrtc]);

  useEffect(() => {
    presentationControllerRef.current = presentationController;

    if (!presentationController) {
      const { origin, pathname } = new URL(window.location);

      setSlideUrl(`${origin}${pathname}?sidebar=false&reference=false#slide-`);
      setPresentationController(new PresentationController());
    } else {
      (async () => {
        try {
          await presentationController?.openView();
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [presentationController]);

  useEffect(() => {
    dispatchSlides(resetState());

    return () => {
      if (presentationControllerRef.current) {
        terminate();
      }

      disposeRecording();
    };
  }, []);

  useEffect(() => {
    if (presentationController) {
      presentationController.changePage(currentIndex);
    }

    if (status === 'start') {
      const time = new Date().getTime() - recordedStartedTime;
      const prevItem = recordedTimeline.slice(-1)[0];

      recordedTimeline.push({
        slideNum: currentIndex + 1,
        time,
        timeStr: `${formatTime(time)} (+${formatTime(time - prevItem.time)})`,
        event: 'changed',
        title: `Moved to the ${currentIndex + 1} slide from the ${currentIndex} slide.`,
        Slide: slides[currentIndex].slide,
        color: '#3498db',
        Icon: <FaCaretRight size="22" />,
      });
    }
  }, [currentIndex]);

  // prohibit below actions
  //   usedAudio && status === 'start'
  //     modal, reset
  //   usedAudio && status === 'stop' && !isEmptyRecordedTimeline
  //     stop or start
  //   usedAudio && status === 'start'
  //     mic
  return (
    <Box bg="#333">
      <Grid maxW="1280px" m="auto" className="host-container">
        <Modal isOpen={isOpenTimeline} onRequestClose={() => setOpenTimelineStatus(false)}>
          <Timeline items={recordedTimeline} url={audioUrl} />
        </Modal>
        <div className="host-left-box">
          <div className="host-note">
            {slides && (
              <pre
                dangerouslySetInnerHTML={{
                  __html: slides[currentIndex].fusumaProps.note,
                }}
              />
            )}
          </div>
        </div>
        <Box mx={10} justifyContent="center" gridArea="right">
          <Box h="calc(90% / 2)">
            <Text
              bg="rgba(100, 100, 100, 0.6)"
              color="#f5f5f5"
              display="inline-block"
              px={6}
              py={1}
              fontSize="3xl"
            >
              Current
            </Text>
            <Box style={{ zoom: 0.5 }} h="80%">
              <Slide slide={slides[currentIndex]} h="100%" />
            </Box>
          </Box>
          <Box h="calc(90% / 2)">
            <Text
              bg="rgba(100, 100, 100, 0.6)"
              color="#f5f5f5"
              display="inline-block"
              px={6}
              py={1}
              fontSize="3xl"
            >
              Next
            </Text>
            {slides[currentIndex + 1] && (
              <Box style={{ zoom: 0.5 }} h="100%">
                <Slide slide={slides[currentIndex + 1]} h="100%" />
              </Box>
            )}
          </Box>
        </Box>
        <div className="host-bottom-box">
          <FaTimes onClick={terminate} className="terminate-button" />
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
              onClick={() => setOpenTimelineStatus(true)}
              size={18}
              className={
                (status === 'start' && usedAudio) || isEmptyRecordedTimeline
                  ? 'disabled'
                  : undefined
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
      </Grid>
    </Box>
  );
};

const Presenter = memo(() => (
  <PresenterProvider>
    <Host />
  </PresenterProvider>
));

export default Presenter;
