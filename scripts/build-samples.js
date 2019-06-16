'use strict';

const { readdirSync, statSync } = require('fs');
const { join } = require('path');
const taskProcess = require('../packages/fusuma/src/tasks');

const base = join(process.cwd(), 'samples');
const getDirs = (p) => readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

const dirs = getDirs(base);

(async () => {
  for (let i = 0; i < dirs.length; i++) {
    console.log('=================', dirs[i], '=================');

    await taskProcess({
      type: 'build',
      options: { dir: join('samples', dirs[i]) }
    });
  }
})();
