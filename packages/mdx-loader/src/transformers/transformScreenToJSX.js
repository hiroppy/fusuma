'use stirct';

function transformScreenToJSX(videoId) {
  return {
    type: 'jsx',
    value:
      '<div className="fusuma-screen">' +
      '<div>This view can capture the screen.<br />' +
      'Click to get started.;)<br /><br />' +
      'Note: This feature runs only in Presenter Mode.' +
      '</div>' +
      `<video id="fusuma-screen-${videoId}" />` +
      '</div>',
  };
}

module.exports = transformScreenToJSX;
