require('@rushstack/eslint-patch/modern-module-resolution');

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
