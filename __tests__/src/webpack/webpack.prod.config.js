const prod = require('../../../src/webpack/webpack.prod.config');

describe('webpack.prod', () => {
  test('should match settings', () => {
    expect(prod).toMatchSnapshot();
  });
});
