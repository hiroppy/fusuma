'use strict';

const mdx = require('@mdx-js/mdx');
const loader = require('../src');

jest.mock('loader-utils');
const loaderUtils = require('loader-utils');
loaderUtils.getOptions.mockImplementation(() => {
  return {
    math: true
  };
});

async function transformToJS(src) {
  return new Promise((resolve, reject) => {
    loader.call(
      {
        async: () => (err, res) => {
          if (err) {
            return reject(err);
          }
          resolve(res);
        }
      },
      src
    );
  });
}

describe('fusuma-loader', () => {
  test('should return normal md', async () => {
    const src = `
# 1
---
# 2
`;
    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should return normal mdx', async () => {
    const src = `
import React from 'react';

const Sample = () => <div>sample</div>;

<Sample />
`;
    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should add fusuma options', async () => {
    const src = `
<!-- note
This is Note!
-->
<!-- classes: class! -->
<!-- sectionTitle: sectionTitle! -->
# Hello
<!-- content -->
<!-- screen -->
`;

    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should convert emoji', async () => {
    const src = `
# :smile:
---
# :smile:
`;

    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should convert mermaid', async () => {
    const src = `
# FlowChart
---

\`\`\`flow
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
`;

    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should convert MathJax', async () => {
    const src = `
# MathJax
$$
a^2 + b^2 = c^2
$$
`;
    expect(await transformToJS(src)).toMatchSnapshot();
  });
});
