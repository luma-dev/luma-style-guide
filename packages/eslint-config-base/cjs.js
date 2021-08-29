/** @type {import('eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },

  extends: ['airbnb-base', 'prettier'],

  plugins: ['import', 'prettier'],

  env: {
    commonjs: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-shadow': 'off',
    'import/no-anonymous-default-export': 'error',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-void': ['error', { allowAsStatement: true }],
  },
};
