// sanitize
const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  // '/': '&#x2F;'
};

module.exports = escapeMap;
