'use strict';

const { resolve } = require('path');
const express = require('express');
const comments = require('./controllers/comments');

function router(app, { dir = 'dist', ev }) {
  app.use('/', express.static(resolve(dir)));

  app.post('/api/comments', (req, res) => comments.post(req, res, ev));

  app.get('*', (req, res) => {
    res.redirect('/');
  });
}

module.exports = router;
