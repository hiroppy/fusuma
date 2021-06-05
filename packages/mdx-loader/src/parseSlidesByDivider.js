function parseSlidesByDivider(tree) {
  const slides = [];
  let current = [];

  tree.children.forEach((node) => {
    if (node.type === 'thematicBreak') {
      slides.push(current);
      current = [];
    }
    current.push(node);
  });

  // last page doesn't have a divider
  slides.push(current);

  return slides;
}

module.exports = parseSlidesByDivider;
