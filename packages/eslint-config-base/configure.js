const { convertUnresolvableToPatterns } = require('./helpers');
const { tsDevFiles, jsDevFiles } = require('./helpers');

/**
 * @typedef {Object} Config
 * @property {string} __dirname
 * @property {(string | RegExp | null | undefined)[]=} unresolvable
 */

/**
 * @return {Config}
 */
const configureBase = (config) => {
  const { __dirname, unresolvable } = config;
  const ignore = convertUnresolvableToPatterns(unresolvable);
  return [
    {
      files: '*.json',
      extends: ['@luma-dev/base/json'],
    },
    {
      files: '*.cjs',
      extends: ['@luma-dev/base/cjs'],
    },
    {
      files: ['*.js', '*.jsx', '*.mjs'],
      extends: ['@luma-dev/base/mjs'],
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@luma-dev/base/ts'],
    },
    {
      files: ['*.d.ts'],
      extends: ['@luma-dev/base/dts'],
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ['*.js', '*.jsx', '*.cjs', '*.mjs', '*.ts', '*.tsx'],
      rules: {
        'import/no-unresolved': [
          'error',
          {
            ignore: ignore.length ? ignore : undefined,
          },
        ],
      },
    },
    {
      files: tsDevFiles(),
      extends: ['@luma-dev/base/ts-dev'],
    },
    {
      files: jsDevFiles(),
      extends: ['@luma-dev/base/js-dev'],
    },
  ];
};

module.exports = configureBase;
