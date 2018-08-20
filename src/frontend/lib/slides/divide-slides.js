// TODO: creat slides util

function divideSlides(slides) {
  const res = [];

  slides.forEach((slide) => {
    res.push(...slide.split('<hr>'));
  });

  return res;
}

export default divideSlides;
