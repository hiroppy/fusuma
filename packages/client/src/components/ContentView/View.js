/*
 * View for Presentation mode
 */

import React, { memo, useEffect, useState } from 'react';
import { Base } from './Base';
import { Receiver as PresentationReceiver } from '../../presentationMode/Receiver';
import { Canvas, listenCanvasEvent, getValue } from '../Canvas';
import { WebRTC } from '../../utils/webrtc';
import '../../../assets/style/view.css';

let presentationReceiver = null;
let webrtc = null;
let currentVideoTag = null;
let currentLayer = null;

const View = memo(({ slides, hash }) => {
  // need to declare here
  if (!presentationReceiver) {
    presentationReceiver = new PresentationReceiver();
    presentationReceiver.onChangePage((pageNum) => {
      if (window.slide) {
        window.slide.goToSlide(pageNum);

        // stop capturing
        if (webrtc && currentVideoTag) {
          stopCapturing(currentVideoTag);
        }
      }
    });
  }

  const [usedCanvas, changeCanvasState] = useState(false);

  const startCapturing = async () => {
    if (!webrtc) {
      webrtc = new WebRTC();

      return await webrtc.startCapturing({
        video: {
          displaySurface: 'monitor'
        }
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

  const listenVideoTags = async (id) => {
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

  const listenCanvas = () => {
    listenCanvasEvent((e) => {
      changeCanvasState(e.status === 'start');
    });
  };

  useEffect(() => {
    listenVideoTags();
    // https://github.com/hiroppy/fusuma/issues/139#issuecomment-508637780
    // listenCanvas();
    // changeCanvasState(getValue().status === 'start');
  }, []);

  return (
    <div className="fusuma-presenter-view">
      {usedCanvas && <Canvas disabled hideGrid />}
      <Base slides={slides} hash={hash} showIndex={false} />
    </div>
  );
});

export default View;
