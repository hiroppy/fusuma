describe('postcss', () => {
  afterEach(() => {
    process.env.NODE_ENV = 'test';

    jest.resetModules();
  });

  it('should match settings when NODE_ENV is development', () => {
    process.env.NODE_ENV = 'development';

    const postcss = require('../src/postcss.config')();

    expect(postcss).toMatchSnapshot();
  });

  it('should match settings when NODE_ENV is production', () => {
    process.env.NODE_ENV = 'production';

    const postcss = require('../src/postcss.config')();

    expect(postcss).toMatchSnapshot();
  });
});
