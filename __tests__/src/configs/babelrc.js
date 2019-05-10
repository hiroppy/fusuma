const babelrc = require('../../../src/configs/babelrc');

describe('babelrc', () => {
  it('should match settings', () => {
    expect(babelrc()).toMatchSnapshot();
  });
});
