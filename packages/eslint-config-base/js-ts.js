require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['prettier', 'plugin:eslint-comments/recommended'],
  plugins: ['import', 'eslint-comments', 'prettier'],
  rules: {
    'no-underscore-dangle': 'off',
    'no-console': 'error',
    'no-lone-blocks': 'off',
    'eslint-comments/no-unused-disable': 'error',
    'no-shadow': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'arrow-body-style': 'off',

    'prettier/prettier': ['error'],

    'import/extensions': 'off',
    'import/no-anonymous-default-export': 'error',
    'no-use-before-define': 'off',

    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
};
