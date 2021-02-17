'use strict';

const express = require('express');

async function fileServer(basePath, publicPath = '/', port = 5445) {
  return new Promise((resolve, reject) => {
    const app = express();

    app.use(express.static(basePath));
    app.use(publicPath, express.static(basePath));

    const server = app.listen(port, (err) => {
      if (err) {
        return reject(err);
      }
      resolve(server);
    });
  });
}

module.exports = fileServer;
