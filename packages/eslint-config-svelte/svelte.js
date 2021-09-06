require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').parserOptions} */
module.exports = {
  extends: ['@luma-dev/base/ts'],
  plugins: ['svelte3'],

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
  processor: 'svelte3/svelte3',
  settings: {
    'svelte3/typescript': true,
  },
  rules: {
    // Prettier should be run separately.
    // prettier-plugin-svelte should be installed in the directory
    // in which prettier would be run.
    'prettier/prettier': 'off',
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
