'use strict';

// sanitize
const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  // '/': '&#x2F;'
};

function createFusumaProps(nodes) {
  const property = {};

  nodes.forEach(({ type, value }) => {
    if (type === 'comment') {
      const v = value.trim();

      if (v === 'executable-code') {
        property.hasExecutableCode = true;
      }

      if (v === 'contents') {
        property.contents = true;
      }
      if (v === 'screen') {
        property.screen = true;
      }
      if (v.slice(0, 4) === 'note') {
        const s = v
          .slice(4)
          .trim()
          .replace(/[&<>"']/gim, (m) => escapeMap[m])
          .replace(/\n/g, '\\n');

        property.note = s;
      }
      if (v.slice(0, 8) === 'classes:') {
        property.classes = v.slice(8).trim();
      }
      if (v.slice(0, 13) === 'sectionTitle:') {
        property.sectionTitle = v.slice(13).trim();
      }
      // if (v.slice(0, 5) === 'line:') {
      //   property.lines = v.slice(13).trim();
      // }
    }
  });

  return `{${Object.entries(property)
    .map(([key, value]) => `${key}: '${value}'`)
    .join(',')}}`;
}

module.exports = createFusumaProps;
