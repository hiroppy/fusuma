const fs = require('fs');
const path = require('path');
const fusuma = require('../../../src/configs/fusumarc');

describe('fusuma', () => {
  const p = path.join(__dirname, '.fusumarc.yml');

  afterAll(() => {
    fs.unlinkSync(p);
  });

  test('init', async () => {
    await fusuma.init(__dirname);

    expect(fs.existsSync(p)).toBeTruthy();
    expect(fs.readFileSync(p, 'utf8')).toMatchSnapshot();
  });

  test('read', async () => {
    // priority: yml > js

    fs.writeFileSync(path.join(__dirname, '.fusumarc.yml'), `meta:
  url:
  name: yml
  author:
  description:
  thumbnail:
  siteName:
slide:
  theme: js
extends:
  js:
  css:
    `);

    expect(await fusuma.read(__dirname)).toMatchSnapshot();

    fs.unlinkSync(p);

    fs.writeFileSync(path.join(__dirname, '.fusumarc.js'), `module.exports = {
  meta: {
    url: '',
    name: 'js',
    author: '',
    description: '',
    thumbnail: '',
    siteName: ''
  },
  slide: {
    theme: ''
  },
  extends: {
    js: '',
    css: ''
  }
};
    `);

    expect(await fusuma.read(__dirname)).toMatchSnapshot();

    fs.unlinkSync(path.join(__dirname, '.fusumarc.js'));
  });
});
