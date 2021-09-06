require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['json-format'],

  settings: {
    'json/json-with-comments-files': [],
    'json/ignore-files': [],
  },
};
