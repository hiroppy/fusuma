const rewire = require('rewire');

describe('webpack.prod', () => {
  test('should match settings', () => {
    const prod = rewire('../../../src/webpack/webpack.prod.config');

    prod.__set__('process.env.NODE_ENV', 'production');
    prod.__set__('__dirname', 'stabDir');

    const res = prod();

    // can not stub using rewire
    res.module.rules.forEach((rule) => {
      if (rule.test.toString() === '/\\.css$/') {
        rule.use[0].loader = 'stub';
      }
    });

    res.plugins.forEach((p) => {
      if (p.constructor.name === 'ExtractTextPlugin') {
        p.id = -1;
      }
    });

    expect(res).toMatchSnapshot();
  });
});
