'use strict';

const { readdirSync, statSync } = require('fs');
const { join } = require('path');
const { execSync } = require('child_process');

const base = join(__dirname, '../packages/playground');
const getDirs = (p) => readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

const dirs = getDirs(base);

(async () => {
  for (let i = 0; i < dirs.length; i++) {
    const name = dirs[i];

    if (!['syntaxes'].includes(name)) {
      console.log('=================', name, '=================');

      execSync(`cd ${join(base, name)} && npm run build`, { stdio: 'inherit' });
    }
  }
})();
