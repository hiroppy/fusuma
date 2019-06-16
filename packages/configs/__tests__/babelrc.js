const babelrc = require('../src/babelrc');

describe('babelrc', () => {
  it('should match settings', () => {
    expect(babelrc()).toMatchSnapshot();
  });
});
