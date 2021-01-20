'use strict';

const { readdirSync, statSync } = require('fs');
const { join } = require('path');
const deploy = require('../packages/fusuma/src/tasks/deploy');

const getDirs = (p) => readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

(async () => {
  const base = join(process.cwd(), 'samples');
  const dirs = getDirs(base);

  for (let i = 0; i < dirs.length; i++) {
    await deploy(
      {
        internal: {
          basePath: base,
          outputDirPath: join(join(base, dirs[i]), 'dist'),
        },
      },
      {
        dest: dirs[i],
      }
    );
  }
})();
