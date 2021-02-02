import { ToC } from '../components/ToC';

export function createSlidesProps(slides) {
  const slidesArr = [];
  const propsArr = [];
  const backgroundsArr = [];
  const res = {};

  slides.forEach(({ slides, fusumaProps, backgrounds }) => {
    slidesArr.push(...slides);
    propsArr.push(...fusumaProps);
    backgroundsArr.push(...backgrounds);
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

    return {
      slide: props.contents ? ToC({ list: res.contentsList }) : slide,
      fusumaProps: {
        ...props,
        background,
      },
    };
  });

  return res;
}
