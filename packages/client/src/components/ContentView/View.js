/*
 * View for Presentation mode
 */

import React from 'react';
import { Base } from './Base';
import { Receiver as PresentationReceiver } from '../../presentationMode/Receiver';
import { Canvas, listenCanvasEvent, getValue } from '../Canvas';
import { WebRTC } from '../../utils/webrtc';
import '../../../assets/style/view.css';

export default class View extends React.PureComponent {
  constructor() {
    super();

    this.webrtc = null;
    this.currentVideoTag = null;
    this.currentLayer = null;
    this.presentationReceiver = new PresentationReceiver();

    this.presentationReceiver.onChangePage((pageNum) => {
      if (window.slide) {
        window.slide.goToSlide(pageNum);

        // stop capturing
        if (this.webrtc && this.currentVideoTag) {
          this.stopCapturing(this.currentVideoTag);
        }
      }
    });

    this.state = {
      usedCanvas: false
    };
  }

  componentDidMount() {
    this.listenVideoTags();
    this.listenCanvas();
    this.setState({ usedCanvas: getValue().status === 'start' });
  }

  async listenVideoTags(id) {
    const videoContainers = document.querySelectorAll('#webslides .fusuma-screen');

    if (videoContainers === null) return;

    // need to active the view screen if want to capture the screen
    videoContainers.forEach((container) => {
      const [overlay, video] = container.children;

      video.addEventListener('click', async () => {
        if (!this.webrtc) {
          const stream = await this.startCapturing();

          video.srcObject = stream;
          video.play();
          this.currentVideoTag = video;
          this.currentLayer = overlay;
          this.currentLayer.style.opacity = 0;

          // Click on browser UI stop sharing button
          //https://stackoverflow.com/questions/25141080/how-to-listen-for-stop-sharing-click-in-chrome-desktopcapture-api
          stream.getVideoTracks()[0].onended = () => {
            this.stopCapturing(video);
          };
        }
      });
    });
  }

  startCapturing = async () => {
    if (!this.webrtc) {
      this.webrtc = new WebRTC();

      return await this.webrtc.startCapturing({
        video: {
          displaySurface: 'monitor'
        }
      });
    } else {
      throw new Error('Capturing has already run.');
    }
  };

  stopCapturing = (elem) => {
    if (this.webrtc && elem) {
      elem.pause();
      this.webrtc.stopCapturing(elem);
      this.currentLayer.style.opacity = 1;
      this.webrtc = null;
      this.currentLayer = null;
      this.currentVideoTag = null;
    }
  };

  listenCanvas = () => {
    listenCanvasEvent((e) => {
      this.setState({ usedCanvas: e.status === 'start' });
    });
  };

  render() {
    return (
      <div className="fusuma-presenter-view">
        {this.state.usedCanvas && <Canvas disabled hideGrid />}
        <Base slides={this.props.slides} hash={this.props.hash} showIndex={false} />
      </div>
    );
  }
}
