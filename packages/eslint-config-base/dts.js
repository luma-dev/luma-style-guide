require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'import/no-duplicates': 'off',
  },
};
