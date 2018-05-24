'use strict';

const { readdirSync, statSync } = require('fs');
const { join } = require('path');
const ghpages = require('gh-pages');

const getDirs = (p) => readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

function publish(name, p) {
  return new Promise((resolve, reject) => {
    ghpages.publish(
      join(p, 'dist'),
      {
        dest: name
      },
      (err) => {
        if (err) reject(err);
        else resolve();
      }
    );
  });
}

(async () => {
  const base = join(process.cwd(), 'samples');
  const dirs = getDirs(base);

  for (let i = 0; i < dirs.length; i++) {
    await publish(dirs[i], join(base, dirs[i]));
  }
})();
