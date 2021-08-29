/**
 * @param {string} dirname
 * @return {import('eslint').Linter.ConfigOverride[]}
 */
const configureSvelte = (dirname) => [
  {
    files: ['*.svelte'],
    parserOptions: {
      tsconfigRootDir: dirname,
    },
  },
];

module.exports = configureSvelte;
