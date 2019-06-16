'use strict';

const { fusuma } = require('@fusuma/cli');
const tasks = require('./tasks');

(async () => {
  const res = await fusuma();

  tasks(res);
})();

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});
