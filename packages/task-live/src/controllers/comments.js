'use strict';

function post(req, res, ev) {
  const { text } = req.body;

  if (text === undefined) {
    return res.status(400).send('a comment key is required in the request body');
  }

  ev.emit('data', [
    {
      id: `${Math.random()}`,
      text,
      platform: 'fusuma'
    }
  ]);

  res.send('ok');
}

module.exports = {
  post
};
