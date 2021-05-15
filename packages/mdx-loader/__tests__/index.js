'use strict';

const loader = require('../src');

jest.mock('loader-utils');
const loaderUtils = require('loader-utils');
loaderUtils.getOptions.mockImplementation(() => {
  return {
    math: true,
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
        },
      },
      src
    );
  });
}

describe('fusuma-loader', () => {
  beforeAll(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.05072298324733815);
  });

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
<!-- section-title: section-title! -->
# Hello
<!-- content -->
<!-- screen -->
`;

    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should add props via frontmatter', async () => {
    const src = `
+++
classes = ['foo', 'bar']
sectionTitle = "title!"
+++

# Hello
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

\`\`\`chart
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
`;

    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should convert mermaid using mermaid attr', async () => {
    const src = `
# FlowChart
---

\`\`\`mermaid
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

  test('should convert all img src', async () => {
    const src = `
# img src

<div>
  <img src="random.gif" alt="random"/>
  <img src="random2.png" alt="random2"/>
  <img src="random3.svg" alt="random3"/>
</div>
`;
    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should convert class to className', async () => {
    const src = `
# Class

<div class="test">
  <div class="test2">
    <h2 class="test3">hello</h2>
  </div>
</div>
`;
    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should add data-line to pre tag', async () => {
    const src = `
\`\`\`js line="5"
first
\`\`\`

\`\`\`ts line="10-100"
second
\`\`\`
`;
    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should convert markdown-syntax image to JSX', async () => {
    const src = `
![Alt](/tmp/withAlt.jpg)
![](/tmp/withoutAlt.jpg)
![](/tmp/style.jpg?h=100%)
![](/tmp/style.jpg?dont=delete&h=100px&w=100%)
`;
    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should convert QRCode', async () => {
    const src = `
<!-- qr: https://google.com -->
`;
    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should append div tag by block comment', async () => {
    const src = `
<!-- block-start -->
out
<!-- block-start: foo -->
in
<!-- block-start:foo,bar, baz -->
core
<!-- block-end -->
in
<!-- block-end -->
out
<!-- block-end -->
`;

    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should append executable code components', async () => {
    const src = `
<!-- executable-code -->
\`\`\`javascript
const a = 1;
const b = 2;
console.log(a + b);
\`\`\`
`;

    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should add background to props', async () => {
    const src = `
<!-- background: red -->
`;

    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should add background to props via frontmatter', async () => {
    const src = `
+++
background = "red"
+++
`;

    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should add background(url) to props', async () => {
    const src = `
<!-- background: '../../img.jpeg' -->
`;

    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should add background(url) to props via frontmatter', async () => {
    const src = `
+++
background = '../../img.jpeg'
+++
`;

    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should add fragments', async () => {
    const src = `
<!-- fragments-start -->
1

2

3

4
<!-- fragments-end -->
`;

    expect(await transformToJS(src)).toMatchSnapshot();
  });

  test('should add sns accounts', async () => {
    const src = `
<!-- account: twitter, name, hello -->
<!-- account: github, name, bye -->
<!-- account: facebook, name, hello -->
<!-- account: linkedin, name, bye -->
 `;

    expect(await transformToJS(src)).toMatchSnapshot();
  });
});
