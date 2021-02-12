import { ToC } from '../components/ToC';

export function createSlidesProps(slides) {
  const slidesArr = [];
  const propsArr = [];
  const backgroundsArr = [];
  const fragmentStepsArr = [];
  const slidesTimeline = [];
  const res = {};

  slides.forEach(({ slides, fusumaProps, backgrounds, fragmentSteps }) => {
    slidesArr.push(...slides);
    propsArr.push(...fusumaProps);
    backgroundsArr.push(...backgrounds);
    fragmentStepsArr.push(fragmentSteps);
    slidesTimeline.push(...fragmentSteps);
  });

  propsArr.reduce((acc, { sectionTitle }, i) => {
    if (sectionTitle) {
      acc.push({
        title: sectionTitle,
        index: i + 1,
      });
    }
    return acc;
  }, (res.contentsList = []));

  res.slides = slidesArr.map((slide, i) => {
    const props = propsArr[i];
    const background = (() => {
      if (backgroundsArr[i] === 0) {
        return null;
      }
      if (backgroundsArr[i].includes('/')) {
        return { backgroundImage: `url('${backgroundsArr[i]}')` };
      }
      return { backgroundColor: backgroundsArr[i] };
    })();

    if (props.classes) {
      props.classes = Array.isArray(props.classes)
        ? props.classes[0].split(',') // for HMR
        : props.classes.split(',');
    }

    return {
      slide: props.contents ? ToC({ list: res.contentsList }) : slide,
      fusumaProps: {
        ...props,
        background,
      },
    };
  });

  res.timeline = slidesTimeline;

  return res;
}
