const rewire = require('rewire');

describe('webpack.config', () => {
  const rc = {
    meta: {
      url: 'url',
      name: 'test',
      description: 'description',
      thumbnail: 'thumbnail',
      siteName: 'siteName'
    },
    extends: {
      js: 'js_path',
      css: 'css_path'
    },
    internal: {
      basePath: '.'
    }
  };

  afterEach(() => {
    process.env.NODE_ENV = 'test';

    jest.resetModules();
  });

  test('should return settings when NODE_ENV is development', () => {
    const webpack = rewire('../../../src/webpack/webpack.config');

    webpack.__set__('process.env.NODE_ENV', 'development');
    webpack.__set__('__dirname', 'stabDir');
    webpack.__set__('path', {
      ...require('path'),
      resolve: () => 'stab',
      join: (p) => `stub/${p}`
    });

    expect(webpack(rc)).toMatchSnapshot();
  });

  test('should return settings when NODE_ENV is production', () => {
    const webpack = rewire('../../../src/webpack/webpack.config');

    webpack.__set__('process.env.NODE_ENV', 'production');
    webpack.__set__('__dirname', 'stabDir');
    webpack.__set__('path', {
      ...require('path'),
      resolve: () => 'stab',
      join: (p) => `stub/${p}`
    });

    const res = webpack(rc);

    // can not stub using rewire
    res.module.rules.forEach((rule) => {
      if (rule.test.toString() === '/\\.css$/') {
        rule.use[0].loader = 'stub';
      }
    });

    expect(res).toMatchSnapshot();
  });
});
