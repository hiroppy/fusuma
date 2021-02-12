export function getSlideIndex(num, slidesLength, currentIndex) {
  let nextIndex = num;

  if (num === '+') {
    nextIndex = Math.min(currentIndex + 1, slidesLength);
  } else if (num === '-') {
    nextIndex = Math.max(currentIndex - 1, 0);
  }

  return nextIndex;
}
