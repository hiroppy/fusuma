// this plugin is for fusuma's syntax slide
function walk() {
  return (tree) => {
    const slides = [];
    let title = '';
    let content = [];
    let description = '';
    let url = '';

    tree.children.forEach((node) => {
      if (node.type === 'thematicBreak') {
        if (content.length) {
          slides.push({
            title,
            content,
            description,
            url,
          });
          description = '';
          content = [];
        }
        return;
      }
      if (node.type === 'heading') {
        title = node.children[0].value;
      }
      // for md
      if (node.type === 'code') {
        content.push({
          code: node.value,
          lang: node.lang,
        });
      }
      if (node.type === 'comment') {
        if (node.value.includes('description:')) {
          description = node.value.replace('description:', '').trim();
        }
        if (node.value.includes('url:')) {
          url = node.value.replace('url:', '').trim();
        }
      }
    });

    slides.push({
      title,
      content,
      description,
      url,
    });

    tree.children.push({
      type: 'export',
      default: false,
      value: `
        import React from 'react';
        export const slides = ${JSON.stringify(slides)}`,
    });
  };
}

module.exports = walk;
