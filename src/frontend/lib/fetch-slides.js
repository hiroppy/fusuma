const fetchSlides = (dir) => {
  /**
   * get all md and html contents
   * @param {Array<string>} context - filenames
   */
  function fetchAll(context) {
    return {
      id: context.id,
      slides: context
        .keys()
        .sort()
        .map((e) => context(e))
    };
  }

  return fetchAll(dir);
};

// export const fetchCommon = () => {
//   const context = require.context('../common/slides', true, /(md|html)$/);

//   return context.keys().reduce((prev, current) => {
//     prev[current.split('./')[1]] = context(current);

//     return prev;
//   }, {});
// };

export default fetchSlides;
