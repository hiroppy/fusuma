const { isAbsolute } = require('path');
const rewire = require('rewire');

describe.skip('webpack.config', () => {
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
    const webpack = rewire('../src/webpack.config');

    webpack.__set__('process.env.NODE_ENV', 'development');
    webpack.__set__('__dirname', 'stabDir');
    webpack.__set__('path', {
      ...require('path'),
      resolve: () => 'stab',
      join: (p) => `stub/${p}`
    });

    expect(webpack(rc)).toMatchSnapshot();
  });

  test.skip('should return settings when NODE_ENV is production', () => {
    const webpack = rewire('../src/webpack.config');

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
        rule.use.forEach((r, i) => {
          if (typeof r === 'string' && isAbsolute(r)) rule.use[i] = 'stub/';
        });
      }
    });

    // res.plugins.forEach((p) => {
    //   if (p.constructor.name === 'ExtractTextPlugin') {
    //     p.id = -1;
    //   }
    // });

    expect(res).toMatchSnapshot();
  });
});
