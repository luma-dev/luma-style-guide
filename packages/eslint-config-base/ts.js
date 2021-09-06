require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/typescript',
    'plugin:eslint-comments/recommended',
  ],

  plugins: ['prettier', 'eslint-comments'],

  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-underscore-dangle': 'off',
    'no-console': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    'no-lone-blocks': 'off',
    '@typescript-eslint/no-implicit-any-catch': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'import/extensions': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: false,
      },
    ],
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      {
        allowConstantLoopConditions: true,
      },
    ],
    '@typescript-eslint/no-unsafe-return': 'error',
    'prettier/prettier': ['error'],
    'no-shadow': 'off',
    'import/no-anonymous-default-export': 'error',
    'no-use-before-define': 'off',

    'import/no-extraneous-dependencies': 'off',
    'no-void': ['error', { allowAsStatement: true }],
  },
};
