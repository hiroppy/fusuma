'use strict';

const { execSync } = require('child_process');
const { join } = require('path');
const deploy = require('../packages/task-ghp/src');

(async () => {
  execSync('cd site/website && yarn build', { stdio: 'inherit' });

  try {
    execSync('git checkout gh-pages && rm -rf docs css en img js && rm index.html sitemap.xml', {
      stdio: 'inherit',
    });

    try {
      execSync(
        "git add docs css en img js index.html sitemap.xml && git commit -m 'delete site' && git push origin gh-pages",
        {
          stdio: 'inherit',
        }
      );
    } catch (e) {
      console.error(e);
    }

    execSync('git checkout -', {
      stdio: 'inherit',
    });
  } catch (e) {
    console.error(e);
  }

  await deploy(join(process.cwd(), 'site/website/build/fusuma'), { add: true });
})();
