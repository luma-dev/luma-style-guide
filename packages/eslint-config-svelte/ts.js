/** @type {import('eslint').parserOptions} */
module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^[^.].*\\.(?:css)$'],
      },
    ],
  },
};
