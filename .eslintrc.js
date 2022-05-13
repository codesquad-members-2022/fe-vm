module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-filename-extension': ['error', { extensions: ['js', 'jsx'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
