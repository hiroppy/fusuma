import 'webslides';

export function setup() {
  const ws = new window.WebSlides({
    loop: process.env.LOOP,
    showIndex: process.env.SHOW_INDEX
  });

  return ws;
}
