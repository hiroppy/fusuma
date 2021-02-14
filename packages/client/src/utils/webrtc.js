export class WebRTC {
  constructor() {
    if (!navigator.mediaDevices.getUserMedia) {
      console.warn('Not supported');
    }

    this.url = null;
    this.finishedProcess = false;
  }

  async setupRecording() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

    this.handlerRecording(stream);
    return stream;
  }

  handlerRecording(stream) {
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
          type: 'audio/webm',
        })
      );
    });
  }

  startRecording() {
    this.mediaRecorder.start();
    this.finishedProcess = false;
    this.url = null;
  }

  stopRecording() {
    return new Promise((resolve) => {
      this.mediaRecorder.stop();
      const interval = setInterval(() => {
        if (this.finishedProcess) {
          clearInterval(interval);
          resolve(this.url);
        }
      }, 100);
    });
  }

  disposeRecording() {
    this.mediaRecorder.stream.getTracks().forEach((track) => track.stop());
    this.finishedProcess = false;
    this.url = null;
  }
}
