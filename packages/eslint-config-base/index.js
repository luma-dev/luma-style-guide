require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: ['!*.js', '!*.cjs', '!*.mjs', '!*.ts'],
};
