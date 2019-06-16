export function fetchSlides(dir) {
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
}
