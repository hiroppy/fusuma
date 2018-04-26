const insertSlide = (slides, slide, position) => {
  const tmpSlides = slides.slice();
  tmpSlides.splice(position, 0, slide);

  return tmpSlides;
};

export default insertSlide;
