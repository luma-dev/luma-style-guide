require('@rushstack/eslint-patch/modern-module-resolution');

const { jsTestFiles, tsTestFiles } = require('@luma-dev/eslint-config-base/helpers');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: [...jsTestFiles(), ...tsTestFiles()],
      extends: ['./js-ts-test'],
    },
  ],
};
