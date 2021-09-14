const { convertUnresolvableToPatterns } = require('./helpers');

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
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ['*.js', '*.cjs', '*.mjs', '*.ts', '*.tsx'],
      rules: {
        'import/no-unresolved': [
          'error',
          {
            ignore: ignore.length ? ignore : undefined,
          },
        ],
      },
    },
  ];
};

module.exports = configureBase;
