import mermaid from 'mermaid';

export class Mermaid {
  constructor() {
    mermaid.initialize({
      startOnLoad: false,
      er: {
        useMaxWidth: false,
      },
      flowchart: {
        useMaxWidth: false,
      },
      sequence: {
        useMaxWidth: false,
      },
      gantt: {
        useMaxWidth: false,
      },
    });
  }

  getElms() {
    return document.querySelectorAll('.mermaid');
  }

  init() {
    this.reload();
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

      Object.assign(elm.style, {
        visibility: 'initial',
      });

      mermaid.init();
    }
  }
}
