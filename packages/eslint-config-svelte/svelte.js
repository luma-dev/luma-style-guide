require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').parserOptions} */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@luma-dev/base/ts',
    '@luma-dev/unstyle/whitespace',
    '@luma-dev/unstyle/sort',
    '@luma-dev/unstyle/import/whitespace',
    '@luma-dev/unstyle/import/sort',
    // Prettier should be run separately.
    // prettier-plugin-svelte should be installed in the directory
    // in which prettier would be run.
    '@luma-dev/unstyle/prettier',
  ],
  plugins: ['@luma-dev/svelte3'],

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    project: 'tsconfig.json',
    extraFileExtensions: ['.svelte'],
  },
  env: {
    es6: true,
    browser: true,
  },
  processor: '@luma-dev/svelte3/svelte3',
  settings: {
    'svelte3/typescript': true,
  },
  rules: {
    // svelte
    // svelte uses `export let ... = undefined` as optional props.
    'no-undef-init': 'off',
    'import/prefer-default-export': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^[^.].*\\.(?:css)$'],
      },
    ],
  },
};
