require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: ['airbnb-base', './js-ts'],
  env: {
    commonjs: true,
  },
};
