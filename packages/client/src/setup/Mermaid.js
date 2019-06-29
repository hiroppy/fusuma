import mermaid from 'mermaid';

export class Mermaid {
  constructor() {
    mermaid.initialize({
      startOnLoad: false
    });
  }

  getElms() {
    return document.querySelectorAll('.mermaid');
  }

  encode(elm) {
    const encodedString = `data:image/svg+xml;base64,${btoa(elm.innerHTML)}`;

    elm.innerHTML = ''; // delete svg
    Object.assign(elm.style, {
      visibility: 'initial',
      background: `url(${encodedString})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '320px', // TODO: fix
      height: '320px', // TODO: fix
      margin: '0 auto'
    });
  }

  init() {
    const elms = this.getElms();

    elms.forEach((elm) => {
      mermaid.init();
      this.encode(elm);
    });
  }

  reload() {
    const elms = this.getElms();
    const head = [];

    for (let i = 0; i < elms.length; i++) {
      const elm = elms[i];
      const id = elm.id;
      const value = elm.getAttribute('data-value');

      if (head.includes(id)) {
        return;
      }

      head.push(id);

      elm.style.background = '';
      elm.innerHTML = value;

      elm.removeAttribute('data-processed');

      mermaid.init();
      this.encode(elm);
    }
  }
}
