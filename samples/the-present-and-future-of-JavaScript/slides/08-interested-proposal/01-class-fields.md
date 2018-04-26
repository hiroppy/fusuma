## class fields
stage-3

```javascript
class Counter extends HTMLElement {
  x = 0;  // public fields 
  #y = 0; // private fields

  constructor() {
    super();
    this.onclick = this.clicked.bind(this);
  }

  clicked() {
    this.x++;
    this.#y++;
    window.requestAnimationFrame(this.render.bind(this));
  }

  render() {
    this.textContent = this.#y.toString();
  }
}
```

<a class="ref-link" target="_blank" href="https://github.com/tc39/proposal-class-fields">
  https://github.com/tc39/proposal-class-fields
</a>
