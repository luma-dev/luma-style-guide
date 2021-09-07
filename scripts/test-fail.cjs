#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');

console.log('[INFO] scripts/test-fail.cjs and linting should be run independently.');

const projRoot = path.resolve(__dirname, '..');
const failProjs = fs.readdirSync(path.resolve(projRoot, 'fail'));
const ignoreFiles = [path.resolve(projRoot, '.eslintignore'), path.resolve(projRoot, '.prettierignore')];
const tests = ['eslint', 'prettier'];
const testArgs = [
  ['lint:eslint', '--', '--no-color'],
  ['lint:prettier', '--', '--no-color'],
];

const originals = ignoreFiles.map((f) => fs.readFileSync(f).toString().split('\n'));

const setup = (p) => {
  ignoreFiles.forEach((f, i) => {
    const added = [...originals[i], '/*', '!/fail/', `!/fail/${p}/`, ''].join('\n');
    fs.writeFileSync(f, added);
  });
};

const teardown = () => {
  ignoreFiles.forEach((f, i) => {
    fs.writeFileSync(f, originals[i].join('\n'));
  });
};

failProjs.forEach((p) => {
  tests.forEach((t, ti) => {
    const title = `[${p}][${t}]`;
    setup(p);
    try {
      let err;
      try {
        execFileSync('pnpm', testArgs[ti], {
          cwd: projRoot,
          stdio: ['ignore', 'ignoer', 'pipe'],
          encoding: 'utf8',
        });
      } catch (e) {
        err = e;
      }
      const patFile = path.resolve(projRoot, `fail/${p}/.test-${t}.txt`);

      const toFail = fs.existsSync(patFile);

      if (!toFail && err) {
        throw new Error('expected command to succeed instead to fail');
      }
      if (toFail && !err) {
        throw new Error('expected command to fail instead to succeed');
      }
      if (toFail) {
        const stderr = err.output[1];
        const pats = fs
          .readFileSync(patFile)
          .toString()
          .split('\n')
          .map((line) => line.trim())
          .filter((line) => line && line[0] !== '#');
        if (pats.length === 0) {
          throw new Error(`[TEST-CONFIG-ERROR] no patterns declared in test file ${patFile}`);
        }

        const notFound = pats
          .map((pat) => [pat[0] === '!' ? !stderr.search(pat.slice(1)) : stderr.search(pat) >= 0, pat])
          .filter(([ok]) => !ok);
        if (notFound.length > 0) {
          throw new Error(
            `${notFound.length} patterns are not matched for error:\n${stderr
              .split('\n')
              .map((line) => `\t${line}`)
              .join('\n')}\nPatterns not matched are:\n${notFound
              .map(([, pat], i) => `\t#${i + 1}: ${pat}`)
              .join('\n')}`,
          );
        }
      }
      console.log(`${title} OK`);
    } catch (e) {
      console.error(`${title} FAIL: ${e}`);
    } finally {
      teardown();
    }
  });
});
