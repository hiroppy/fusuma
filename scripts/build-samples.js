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

    if (!['syntaxes', 'issues'].includes(name)) {
      console.log('=================', name, '=================');

      execSync(`cd ${join(base, name)} && npm run build`, { stdio: 'inherit' });
    } else {
      const basePath = join(base, name);
      const items = getDirs(basePath);

      for (const item of items) {
        console.log('=================', item, '=================');

        execSync(`cd ${join(basePath, item)} && npm run build`, { stdio: 'inherit' });
      }
    }
  }
})();
