import reveal from 'reveal.js';

export function setupReveal() {
  reveal.initialize({
    history: true,
    transition: 'none',
    controls: process.env.CONTROLS,
    slideNumber: process.env.SLIDE_NUMBER,
    loop: process.env.LOOP
  });

  return reveal;
}
