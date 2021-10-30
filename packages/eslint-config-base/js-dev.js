require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'no-await-in-loop': 'off',

    'import/no-anonymous-default-export': 'off',
    'import/no-dynamic-require': 'off',
  },
};
