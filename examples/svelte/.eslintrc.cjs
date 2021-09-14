const configureBase = require('@luma-dev/eslint-config-base/configure');
const configureSvelte = require('@luma-dev/eslint-config-svelte/configure');

const config = { __dirname };

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@luma-dev/svelte'],
  overrides: [...configureBase(config), ...configureSvelte(config)],
};
