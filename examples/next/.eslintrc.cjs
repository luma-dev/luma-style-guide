const configureBase = require('@luma-dev/eslint-config-base/configure');
const configureNext = require('@luma-dev/eslint-config-next/configure');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@luma-dev/next'],
  overrides: [...configureBase(__dirname), ...configureNext(__dirname)],
};
