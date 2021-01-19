'use strict';

const { createServer } = require('http');
const { EventEmitter } = require('events');
const WebSocket = require('ws');
const express = require('express');
const bodyParser = require('body-parser');
const { config } = require('dotenv');
const router = require('./router');
const Twitter = require('./Twitter');
const logger = require('./logger');

function setupServer({ port = 3000, keyword, interval = 6000, dir = 'dist' }) {
  config();

  let key = null;
  let timer = null;
  let twitter = null;
  const comments = [];
  const commentsEvent = new EventEmitter();

  // twitter mode requires a searched keyword and keys
  if (keyword) {
    if (
      !process.env.CONSUMER_KEY ||
      !process.env.CONSUMER_SECRET ||
      !process.env.ACCESS_TOKEN_KEY ||
      !process.env.ACCESS_TOKEN_SECRET
    ) {
      logger.error("Must create .env file and set twitter's keys.");
    } else {
      twitter = new Twitter({
        keys: {
          consumerKey: process.env.CONSUMER_KEY,
          consumerSecret: process.env.CONSUMER_SECRET,
          accessTokenKey: process.env.ACCESS_TOKEN_KEY,
          accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
        },
      });

      logger.info('Twitter mode is enabled.');
    }
  } else {
    logger.warn(
      'Twitter mode is disabled. If you want to enable, you must specify an searched keyword.(-w)'
    );
  }

  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  router(app, { dir, ev: commentsEvent });

  const server = createServer(app);

  // websocket
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    ws.send(JSON.stringify([{ message: 'hello:)' }]));

    // start interval
    if (wss.clients.size === 1 && timer === null && twitter) {
      logger.info(`Start processing fetching data from Twitter every ${interval}ms.`);
      startInterval();
    }

    if (comments.length !== 0) {
      ws.send(JSON.stringify(comments));
    }

    ws.on('close', () => {
      // stop interval
      if (wss.clients.size === 0) {
        logger.info('Stop processing fetching data from Twitter.');
        stopInterval();
      }
    });
  });

  wss.broadcast = (data) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  };

  // from twitter and api endpoint(post: /comments)
  commentsEvent.on('data', (data) => {
    comments.push(...data);
    wss.broadcast(JSON.stringify(data));
  });

  function startInterval() {
    // 180 times per 15 mins
    timer = setInterval(async () => {
      try {
        const tweets = await twitter.search(keyword);

        // for debug
        // const tweets = [...new Array(10)].map(() => {
        //   return {
        //     id: 123,
        //     platform: 'twitter',
        //     text: `${Math.random()}`,
        //     screenName: 'test',
        //     name: 'hiroppy',
        //     avatar: 'https://avatars0.githubusercontent.com/u/3367801?s=400&v=4'
        //   };
        // });

        // // e.g. [ { message: 'Rate limit exceeded', code: 88 } ]
        commentsEvent.emit('data', tweets);
      } catch (e) {
        logger.error(e);
        stopInterval();
      }
    }, interval);
  }

  function stopInterval() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }

  server.on('listening', () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;

    logger.info(`Listening on ${bind}.`);
  });

  server.listen(port);
}

module.exports = setupServer;
