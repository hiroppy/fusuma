'use strict';

const { readdirSync, statSync } = require('fs');
const { join } = require('path');
const deploy = require('../packages/fusuma/src/tasks/deploy');

const getDirs = (p) => readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

(async () => {
  const base = join(process.cwd(), 'samples');
  const dirs = getDirs(base);

  for (let i = 0; i < dirs.length; i++) {
    const name = dirs[i];

    if (!['syntaxes'].includes(name)) {
      await deploy(
        {
          internal: {
            basePath: base,
            outputDirPath: join(join(base, name), 'dist'),
          },
        },
        {
          dest: name,
        }
      );
    } else {
      //   const basePath = join(base, name);
      //   const items = getDirs(basePath);
      //   for (const item of items) {
      //     await deploy(
      //       {
      //         internal: {
      //           basePath,
      //           outputDirPath: join(join(basePath, item), 'dist'),
      //         },
      //       },
      //       {
      //         dest: join(name, item),
      //       }
      //     );
      //   }
    }
  }
})();
