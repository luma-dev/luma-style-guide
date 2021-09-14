const configureBase = require('@luma-dev/eslint-config-base/configure');
const configureNext = require('@luma-dev/eslint-config-next/configure');

const config = {
  __dirname,
  unresolved: ['example-flawed'],
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@luma-dev/next'],
  overrides: [...configureBase(config), ...configureNext(config)],
};
