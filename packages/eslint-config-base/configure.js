/**
 * @param {string} dirname
 * @return {import('eslint').Linter.ConfigOverride[]}
 */
const configureBase = (dirname) => [
  {
    files: ['*.ts', '*.tsx'],
    parserOptions: {
      tsconfigRootDir: dirname,
    },
  },
];

module.exports = configureBase;
