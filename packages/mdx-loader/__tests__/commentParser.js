'use strict';

const commentParser = require('../src/commentParser');

describe('fusuma-loader: commentParser', () => {
  test('should return key: value case', () => {
    {
      const input = 'key: value';

      expect(commentParser(input)).toMatchSnapshot();
    }

    {
      const input = 'key:value';

      expect(commentParser(input)).toMatchSnapshot();
    }
  });

  test('should return key: foo,bar,baz case', () => {
    {
      const input = 'key: foo,bar,baz';

      expect(commentParser(input)).toMatchSnapshot();
    }

    {
      const input = 'key:foo, bar,     baz';

      expect(commentParser(input)).toMatchSnapshot();
    }
  });

  test('should return key case', () => {
    {
      const input = 'key';

      expect(commentParser(input)).toMatchSnapshot();
    }

    {
      const input = '   key    ';

      expect(commentParser(input)).toMatchSnapshot();
    }
  });

  test('should return aaa', () => {
    const input = `zzzzz
test1
test2`;

    expect(commentParser(input)).toMatchSnapshot();
  });
});
