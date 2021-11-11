require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['prettier', 'plugin:eslint-comments/recommended'],
  plugins: ['import', 'eslint-comments', 'prettier'],
  rules: {
    'no-underscore-dangle': 'off',
    'no-lone-blocks': 'off',
    'eslint-comments/no-unused-disable': 'error',
    'no-shadow': 'off',
    'arrow-body-style': 'off',
    'no-use-before-define': 'off',
    'no-return-await': 'off',
    'no-console': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    quotes: ['error', 'single'],

    'prettier/prettier': ['error'],

    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-anonymous-default-export': 'error',
  },
};
