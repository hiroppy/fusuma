'use strict';

const { readdirSync, statSync } = require('fs');
const { join } = require('path');
const taskProcess = require('../bin/task-process');

const base = join(process.cwd(), 'samples');
const getDirs = (p) => readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

const dirs = getDirs(base);

(async () => {
  for (let i = 0; i < dirs.length; i++) {
    console.log('=================', dirs[i], '=================');

    await taskProcess('build', { dir: join('samples', dirs[i]) });
  }
})();
