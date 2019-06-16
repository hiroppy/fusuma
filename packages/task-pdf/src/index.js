'use strict';

const http = require('http');
const { relative } = require('path');
const handler = require('serve-handler');
const { spawn } = require('child-process-promise');

async function pdf(input, output = 'slide.pdf', port = 3455) {
  const publicPath = relative(process.cwd(), input);
  const server = http.createServer(async (req, res) => {
    return await handler(req, res, { public: publicPath });
  });

  server.listen(port, async () => {
    try {
      await spawn('npx', ['decktape', 'automatic', `http://localhost:${port}`, output], {
        stdio: 'inherit'
      });
    } catch (e) {
      console.error(e);
    } finally {
      server.close();
    }
  });
}

module.exports = pdf;
