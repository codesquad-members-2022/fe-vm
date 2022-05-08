// {
//   "env": {
//     "browser": true,
//     "es2021": true,
//     "es6": true,
//     "node": true
//   },
//   "extends": [
//     "eslint:recommended",
//     "prettier/react",
//     "plugin:react/recommended",
//     "airbnb",
//     "plugin:prettier/recommended"
//   ],
//   "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     },
//     "ecmaVersion": "latest",
//     "sourceType": "module"
//   },
//   "plugins": ["react"],
//   "rules": {
//     "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
//   }
// }
module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],

  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
};
