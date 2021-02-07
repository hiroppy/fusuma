'use strict';

const { join } = require('path');
const loader = require('../src');

jest.mock('loader-utils');
const loaderUtils = require('loader-utils');

const prism = `
import Prism from 'prismjs';
Prism.highlightAll();
export { Prism };
`;
const dirPath = join(__dirname, './fixtures');

describe('prism-loader', () => {
  it('should add multiple languages', async () => {
    loaderUtils.getOptions.mockImplementation(() => {
      return {
        dirPath,
        plugins: [],
        theme: 'default',
      };
    });

    await loader.call(
      {
        async: () => (_, res) => {
          expect(res).toMatchSnapshot();
        },
      },
      prism
    );
  });

  it('should add multiple plugins', async () => {
    loaderUtils.getOptions.mockImplementation(() => {
      return {
        dirPath,
        plugins: ['line-highlight', 'line-numbers'],
        theme: 'default',
      };
    });

    await loader.call(
      {
        async: () => (_, res) => {
          expect(res).toMatchSnapshot();
        },
      },
      prism
    );
  });

  it('should add a theme', async () => {
    loaderUtils.getOptions.mockImplementation(() => {
      return {
        dirPath,
        plugins: [],
        theme: 'dark',
      };
    });

    await loader.call(
      {
        async: () => (_, res) => {
          expect(res).toMatchSnapshot();
        },
      },
      prism
    );
  });
});
