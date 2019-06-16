'use strict';

const { readdirSync, statSync } = require('fs');
const { join } = require('path');
const deploy = require('../packages/task-ghp/src');

const getDirs = (p) => readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

(async () => {
  const base = join(process.cwd(), 'samples');
  const dirs = getDirs(base);

  for (let i = 0; i < dirs.length; i++) {
    await deploy(join(join(base, dirs[i]), 'dist'), { dest: dirs[i] });
  }
})();
