const path = require('path');

/**
 * @param {string} dirname
 * @return {import('eslint').Linter.ConfigOverride[]}
 */
const configureNext = (dirname) => [
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    rules: {
      '@next/next/no-html-link-for-pages': ['error', path.join(dirname, 'src/pages')],
    },
  },
];

module.exports = configureNext;
