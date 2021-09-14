const { convertUnresolvableToPatterns } = require('@luma-dev/eslint-config-base/helpers');

/**
 * @param {import('@luma-dev/eslint-config-base').Config} config
 * @return {import('eslint').Linter.ConfigOverride[]}
 */
const configureSvelte = (config) => {
  const { __dirname, unresolvable } = config;
  return [
    {
      files: ['*.svelte'],
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
      rules: {
        'import/no-unresolved': [
          'error',
          {
            ignore: ['^[^.].*\\.(?:css)$', ...convertUnresolvableToPatterns(unresolvable)],
          },
        ],
      },
    },
    {
      files: ['*.ts'],
      rules: {
        'import/no-unresolved': [
          'error',
          {
            ignore: ['^[^.].*\\.(?:css)$', ...convertUnresolvableToPatterns(unresolvable)],
          },
        ],
      },
    },
  ];
};

module.exports = configureSvelte;
