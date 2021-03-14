export function getSlideIndex({ next, slides, currentIndex, timeline, currentFragmentSteps }) {
  let nextIndex = next;
  let nextCurrentFragmentSteps = 0;

  if (next === '+') {
    nextIndex = Math.min(currentIndex + 1, slides.length - 1);

    // the last page and not first time
    if (slides.length - 1 === currentIndex && Array.isArray(timeline[nextIndex])) {
      nextCurrentFragmentSteps = Math.min(currentFragmentSteps + 1, timeline[nextIndex].length);
    } else if (Array.isArray(timeline[nextIndex])) {
      nextCurrentFragmentSteps = 0;
    } else if (Array.isArray(timeline[currentIndex])) {
      nextCurrentFragmentSteps = currentFragmentSteps + 1;
    } else {
      nextCurrentFragmentSteps = 0;
    }
  } else if (next === '-') {
    nextIndex = Math.max(currentIndex - 1, 0);

    // restore fragments
    if (Array.isArray(timeline[nextIndex])) {
      nextCurrentFragmentSteps = timeline[nextIndex].length;
    } else if (Array.isArray(timeline[currentIndex])) {
      nextCurrentFragmentSteps = currentFragmentSteps - 1;
    } else {
      nextCurrentFragmentSteps = 0;
    }
  }

  if (Array.isArray(timeline[currentIndex])) {
    if (nextCurrentFragmentSteps < 0) {
      return {
        currentIndex: nextIndex,
        currentFragmentSteps: 0,
      };
    } else if (timeline[currentIndex].length >= nextCurrentFragmentSteps) {
      return {
        currentIndex,
        currentFragmentSteps: nextCurrentFragmentSteps,
      };
    } else {
      return {
        currentIndex: nextIndex,
        currentFragmentSteps: 0,
      };
    }
  }

  return {
    currentIndex: nextIndex,
    currentFragmentSteps: nextCurrentFragmentSteps,
  };
}
