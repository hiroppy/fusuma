import { ToC } from '../components/ToC';

export function createSlidesProps(slides, currentIndex) {
  const slidesArr = [];
  const propsArr = [];
  const res = {};

  slides.forEach(({ slides, fusumaProps }) => {
    slidesArr.push(...slides);
    propsArr.push(...fusumaProps);
  });

  propsArr.reduce((acc, { sectionTitle }, i) => {
    if (sectionTitle) {
      acc.push({
        title: sectionTitle,
        index: i + 1
      });
    }
    return acc;
  }, (res.contentsList = []));

  res.slides = slidesArr.map((slide, i) => {
    const props = propsArr[i];

    return {
      slide: props.contents ? ToC({ list: res.contentsList }) : slide,
      fusumaProps: props
    };
  });

  return res;
}
