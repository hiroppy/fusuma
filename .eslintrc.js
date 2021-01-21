module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {},
};
