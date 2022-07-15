/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'guard-for-in': 'off',
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'no-await-in-loop': 'off',

    'import/no-anonymous-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-unresolved': 'off',

    '@typescript-eslint/no-var-requires': 'off',
  },
};
