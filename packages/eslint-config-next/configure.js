const path = require('path');

/**
 * @param {import('@luma-dev/eslint-config-base').Config} config
 * @return {import('eslint').Linter.ConfigOverride[]}
 */
const configureNext = (config) => {
  const { __dirname } = config;
  return [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        '@next/next/no-html-link-for-pages': ['error', path.join(__dirname, 'src/pages')],
      },
    },
    {
      files: ['**/pages/api/**/*.js', '**/pages/api/**/*.ts'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ];
};

module.exports = configureNext;
