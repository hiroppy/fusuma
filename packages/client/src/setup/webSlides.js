import 'webslides';

export function setup({ showIndex = process.env.SHOW_INDEX }) {
  const ws = new window.WebSlides({
    loop: process.env.LOOP,
    showIndex,
    navigateOnScroll: false
  });

  return ws;
}
