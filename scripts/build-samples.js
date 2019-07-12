'use strict';

const { readdirSync, statSync } = require('fs');
const { join } = require('path');
const { execSync } = require('child_process');
// const taskProcess = require('../packages/fusuma/src/tasks');

const base = join(process.cwd(), 'samples');
const getDirs = (p) => readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

const dirs = getDirs(base);

(async () => {
  for (let i = 0; i < dirs.length; i++) {
    console.log('=================', dirs[i], '=================');

    execSync(`cd ${join(base, dirs[i])} && npm run build`, { stdio: 'inherit' });

    // await taskProcess({
    //   type: 'build',
    //   options: { dir: join('samples', dirs[i]) }
    // });
  }
})();
