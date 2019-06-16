export class Controller {
  constructor() {
    this.receiverQuery = '?presenter=view';
    this.apiType =
      typeof window.PresentationRequest === 'function' ? 'presentation' : 'localStorage';
    this.windowId = null;
  }

  openView() {
    return new Promise((resolve, reject) => {
      if (this.apiType === 'presentation') {
        this.presentationRequest = new PresentationRequest([this.receiverQuery]);

        navigator.presentation.defaultRequest = this.presentationRequest;

        this.presentationRequest.addEventListener('connectionavailable', (e) => {
          this.presentationConnection = e.connection;
          resolve(e.connection.id);
        });

        this.presentationRequest.start().catch((err) => reject(err));
      } else {
        this.windowId = window.open(this.receiverQuery, '_blank', 'width=800,height=600');
        resolve();
      }
    });
  }

  changePage(pageNum) {
    const data = JSON.stringify({
      date: Date.now(),
      page: pageNum
    });

    if (this.apiType === 'presentation' && this.presentationConnection) {
      this.presentationConnection.send(data);
    }
    if (this.apiType === 'localStorage') {
      window.localStorage.setItem('page', data);
    }
  }

  async reconnect(id) {
    if (this.apiType === 'presentation') return this.presentationRequest.reconnect(id);
    return Promise.resolve();
  }

  terminate() {
    if (this.apiType === 'presentation' && this.presentationConnection) {
      this.presentationConnection.terminate();
      this.presentationConnection.close();
      this.presentationConnection = null;
    } else if (this.windowId) {
      this.windowId.close();
      this.windowId = null;
    }
  }
}
