'use strict';

const server = require('../server/fileServer');
const { info } = require('../cli/log');
const openBrowser = require('../utils/openBrowser');

async function startProd(config) {
  await server(config.internal.outputDirPath, config.build.publicPath, config.internal.port);
  info('start-prod', `Serving on http://localhost:${config.internal.port}`);
  await openBrowser(`http://localhost:${config.internal.port}`);
}

module.exports = startProd;
