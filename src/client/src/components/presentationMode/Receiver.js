export class Receiver {
  constructor() {
    this.apiType =
      navigator.presentation && navigator.presentation.receiver ? 'presentation' : 'localStorage';

    if (this.apiType === 'presentation') this.setUp();
  }

  registerEvent(name, cb) {
    navigator.presentation.receiver.connectionList.then((list) => {
      list.connections.forEach((connection) => {
        connection.addEventListener(name, cb);
      });

      list.addEventListener('connectionavailable', (event) => {
        cb(event.connection);
      });
    });
  }

  setUp() {
    this.registerEvent('close', (e) => {
      console.log(e);
    });
  }

  onChangePage(cb) {
    if (this.apiType === 'presentation') {
      this.registerEvent('message', (e) => {
        const page = JSON.parse(e.data).page;

        cb(page);
      });
    } else {
      window.addEventListener('storage', (e) => {
        if (e.key === 'page') {
          const page = JSON.parse(e.newValue).page;

          cb(page);
        }
      });
    }
  }
}
