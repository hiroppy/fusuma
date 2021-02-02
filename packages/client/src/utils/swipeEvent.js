// https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android

export function swipeEvent(goTo) {
  let xDown = null;
  let yDown = null;

  document.addEventListener(
    'touchstart',
    (e) => {
      const { clientX, clientY } = e.touches[0];

      xDown = clientX;
      yDown = clientY;
    },
    false
  );
  document.addEventListener(
    'touchmove',
    (e) => {
      if (!xDown || !yDown) {
        return;
      }

      const firstTouch = e.touches[0];
      let xDiff = xDown - firstTouch.clientX;
      let yDiff = yDown - firstTouch.clientY;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          // right
          goTo('+');
        } else {
          // left
          goTo('-');
        }
      }
      xDown = null;
      yDown = null;
    },
    false
  );
}
