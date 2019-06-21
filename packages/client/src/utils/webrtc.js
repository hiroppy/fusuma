export class WebRTC {
  constructor() {
    if (!navigator.mediaDevices.getUserMedia) {
      throw new Error('Not supported');
    }

    this.url = null;
    this.finishedProcess = false;

    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(this.handler);
  }

  handler = (stream) => {
    const recordedChunks = [];

    this.stream = stream;
    this.mediaRecorder = new MediaRecorder(stream, {});

    this.mediaRecorder.addEventListener('dataavailable', (e) => {
      if (e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    });

    this.mediaRecorder.addEventListener('stop', () => {
      this.finishedProcess = true;
      this.url = URL.createObjectURL(
        new Blob(recordedChunks, {
          type: 'audio/webm'
        })
      );
    });
  };

  start = () => {
    this.mediaRecorder.start();
    this.finishedProcess = false;
    this.url = null;
  };

  stop = () => {
    return new Promise((resolve) => {
      this.mediaRecorder.stop();
      const interval = setInterval(() => {
        if (this.finishedProcess) {
          clearInterval(interval);
          resolve(this.url);
        }
      }, 100);
    });
  };

  dispose = () => {
    this.mediaRecorder.stream.getTracks().forEach((track) => track.stop());
    this.finishedProcess = false;
    this.url = null;
  };
}
