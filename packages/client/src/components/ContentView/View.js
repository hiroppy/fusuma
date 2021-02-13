import React, { memo, useEffect, useState } from 'react';
import { Receiver as PresentationReceiver } from '../../presentationMode/Receiver';
import { SlideCore } from '../SlideCore';
// import { Canvas } from '../Canvas';
import { WebRTC } from '../../utils/webrtc';
import { useSlides, updateCurrentIndex } from '../../context/slides';
import '../../../assets/style/view.css';

let webrtc = null;
let currentVideoTag = null;
let currentLayer = null;

const View = memo(() => {
  const {
    state: { currentIndex },
    dispatch,
  } = useSlides();
  const [presentationReceiver, setPresentationReceiver] = useState(null);
  // const [usedCanvas, changeCanvasState] = useState(false);

  const startCapturing = async () => {
    if (!webrtc) {
      webrtc = new WebRTC();

      return await webrtc.startCapturing({
        video: {
          displaySurface: 'monitor',
        },
      });
    } else {
      throw new Error('Capturing has already run.');
    }
  };

  const stopCapturing = (elem) => {
    if (webrtc && elem) {
      elem.pause();
      webrtc.stopCapturing(elem);
      currentLayer.style.opacity = 1;
      webrtc = null;
      currentLayer = null;
      currentVideoTag = null;
    }
  };

  const listenVideoTags = async () => {
    const videoContainers = document.querySelectorAll('#webslides .fusuma-screen');

    if (videoContainers === null) return;

    // need to active the view screen if want to capture the screen
    videoContainers.forEach((container) => {
      const [overlay, video] = container.children;

      video.addEventListener('click', async () => {
        if (!webrtc) {
          const stream = await startCapturing();

          video.srcObject = stream;
          video.play();
          currentVideoTag = video;
          currentLayer = overlay;
          currentLayer.style.opacity = 0;

          // Click on browser UI stop sharing button
          //https://stackoverflow.com/questions/25141080/how-to-listen-for-stop-sharing-click-in-chrome-desktopcapture-api
          stream.getVideoTracks()[0].onended = () => {
            stopCapturing(video);
          };
        }
      });
    });
  };

  // const listenCanvas = () => {
  //   listenCanvasEvent((e) => {
  //     changeCanvasState(e.status === 'start');
  //   });
  // };

  useEffect(() => {
    presentationReceiver?.onChangePage((operation) => {
      dispatch(updateCurrentIndex(operation));
      // stop capturing
      if (webrtc && currentVideoTag) {
        stopCapturing(currentVideoTag);
      }
    });
  }, [presentationReceiver]);

  useEffect(() => {
    window.onload = () => {
      setPresentationReceiver(new PresentationReceiver());
    };

    listenVideoTags();
    // https://github.com/hiroppy/fusuma/issues/139#issuecomment-508637780
    // listenCanvas();
    // changeCanvasState(getValue().status === 'start');
  }, []);

  useEffect(() => {
    // TODO: swiper should be gone to context
    const { swiper } = document.querySelector('.swiper-container');
    swiper?.slideTo(currentIndex);
  }, [currentIndex]);

  return (
    <div className="fusuma-presenter-view">
      {/* {usedCanvas && <Canvas disabled hideGrid />} */}
      <SlideCore />
    </div>
  );
});

export default View;
