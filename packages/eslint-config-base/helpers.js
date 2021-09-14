const tsTestFiles = () => [
  'tests/**/*.ts',
  'tests/**/*.tsx',
  '__tests__/**/*.ts',
  '__tests__/**/*.tsx',
  'scripts/**/*.ts',
  'scripts/**/*.tsx',
  '*.test.ts',
  '*.test.tsx',
  '*.spec.ts',
  '*.spec.tsx',
];
exports.tsTestFiles = tsTestFiles;

const tsConfigFiles = () => ['*.config.ts', '.*.ts'];
exports.tsConfigFiles = tsConfigFiles;

const tsDevFiles = () => [...tsTestFiles(), ...tsConfigFiles()];
exports.tsDevFiles = tsDevFiles;

const jsTestFiles = () => [
  'tests/**/*.js',
  'tests/**/*.mjs',
  'tests/**/*.cjs',
  '__tests__/**/*.js',
  '__tests__/**/*.mjs',
  '__tests__/**/*.cjs',
  'scripts/**/*.js',
  'scripts/**/*.mjs',
  'scripts/**/*.cjs',
  '*.test.js',
  '*.test.mjs',
  '*.test.m.js',
  '*.test.cjs',
  '*.spec.js',
  '*.spec.mjs',
  '*.spec.m.js',
  '*.spec.cjs',
];
exports.jsTestFiles = jsTestFiles;

const jsConfigFiles = () => [
  '*.config.js',
  '*.config.cjs',
  '*.config.mjs',
  '*.config.m.js',
  '.*.js',
  '.*.cjs',
  '.*.mjs',
  '.*.m.js',
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
