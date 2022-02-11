require('@rushstack/eslint-patch/modern-module-resolution');

const { tsDevFiles, jsDevFiles } = require('./helpers');
/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: ['!*.js', '!*.cjs', '!*.mjs', '!*.ts'],

  overrides: [
    {
      files: '*.json',
      extends: ['./json'],
    },
    {
      files: '*.cjs',
      extends: ['./cjs'],
    },
    {
      files: ['*.js', '*.jsx', '*.mjs'],
      extends: ['./mjs'],
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./ts'],
    },
    {
      files: ['*.d.ts'],
      extends: ['./dts'],
    },
    {
      files: tsDevFiles(),
      extends: ['./ts-dev'],
    },
    {
      files: jsDevFiles(),
      extends: ['./js-dev'],
    },
  ],
};
