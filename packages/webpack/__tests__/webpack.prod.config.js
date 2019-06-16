const { isAbsolute } = require('path');
const rewire = require('rewire');

describe('webpack.prod', () => {
  test('should match settings', () => {
    const prod = rewire('../src/webpack.prod.config');

    process.env.NDOE_ENV = 'production';
    prod.__set__('__dirname', 'stabDir');

    const res = prod();

    // can not stub using rewire
    res.module.rules.forEach((rule) => {
      if (rule.test.toString() === '/\\.css$/') {
        rule.use.forEach((r, i) => {
          if (typeof r === 'string' && isAbsolute(r)) rule.use[i] = 'stub/';
        });
      }
    });

    // res.plugins.forEach((p) => {
    //   console.log(p.constructor.name);
    //   if (p.constructor.name === 'MiniCssExtractPlugin') {
    //   }
    // });

    expect(res).toMatchSnapshot();

    process.env.NDOE_ENV = 'test';
  });
});
