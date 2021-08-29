/** @type {import('eslint').parserOptions} */
module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      extends: ['./ts'],
    },
    {
      files: '*.svelte',
      extends: ['./svelte'],
    },
  ],
};
