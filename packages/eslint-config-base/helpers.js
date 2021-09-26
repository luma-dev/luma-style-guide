const tsTestFiles = () => [
  '**/tests/**/*.ts',
  '**/tests/**/*.tsx',
  '**/test/**/*.ts',
  '**/test/**/*.tsx',
  '**/__tests__/**/*.ts',
  '**/__tests__/**/*.tsx',
  '**/__test__/**/*.ts',
  '**/__test__/**/*.tsx',
  '**/scripts/**/*.ts',
  '**/scripts/**/*.tsx',
  '**/script/**/*.ts',
  '**/script/**/*.tsx',
  '*.test.ts',
  '*.test.tsx',
  '*.spec.ts',
  '*.spec.tsx',
];
exports.tsTestFiles = tsTestFiles;

const tsConfigFiles = () => ['*.config.ts', '*.config.tsx', '.*.ts', '.*.tsx'];
exports.tsConfigFiles = tsConfigFiles;

const tsDevFiles = () => [...tsTestFiles(), ...tsConfigFiles()];
exports.tsDevFiles = tsDevFiles;

const jsTestFiles = () => [
  '**/tests/**/*.js',
  '**/tests/**/*.jsx',
  '**/tests/**/*.mjs',
  '**/tests/**/*.cjs',
  '**/test/**/*.js',
  '**/test/**/*.jsx',
  '**/test/**/*.mjs',
  '**/test/**/*.cjs',
  '**/__tests__/**/*.js',
  '**/__tests__/**/*.jsx',
  '**/__tests__/**/*.mjs',
  '**/__tests__/**/*.cjs',
  '**/__test__/**/*.js',
  '**/__test__/**/*.jsx',
  '**/__test__/**/*.mjs',
  '**/__test__/**/*.cjs',
  '**/scripts/**/*.js',
  '**/scripts/**/*.jsx',
  '**/scripts/**/*.mjs',
  '**/scripts/**/*.cjs',
  '**/script/**/*.js',
  '**/script/**/*.jsx',
  '**/script/**/*.mjs',
  '**/script/**/*.cjs',
  '*.test.js',
  '*.test.jsx',
  '*.test.mjs',
  '*.test.cjs',
  '*.spec.js',
  '*.spec.jsx',
  '*.spec.mjs',
  '*.spec.cjs',
];
exports.jsTestFiles = jsTestFiles;

const jsConfigFiles = () => [
  '*.config.js',
  '*.config.jsx',
  '*.config.cjs',
  '*.config.mjs',
  '.*.js',
  '.*.jsx',
  '.*.cjs',
  '.*.mjs',
];
exports.jsConfigFiles = jsConfigFiles;

const jsDevFiles = () => [...jsTestFiles(), ...jsConfigFiles()];
exports.jsDevFiles = jsDevFiles;

/**
 * @param {(string | RegExp | null | undefined)[]=} unresolvable
 * @return {string[]}
 */
const convertUnresolvableToPatterns = (unresolvable) =>
  // Known not needed to escape package name chars.
  (unresolvable ?? []).filter((e) => `^${e}$`).map((e) => (typeof e === 'string' ? e : e.toString()));

exports.convertUnresolvableToPatterns = convertUnresolvableToPatterns;
