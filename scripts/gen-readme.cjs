#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const projRoot = path.resolve(__dirname, '..');
const readmePath = path.resolve(projRoot, 'README.md');
const readme = fs.readFileSync(readmePath, { encoding: 'utf8' });
const pkgs = fs.readdirSync(path.resolve(projRoot, 'packages'));

/**
 * @param {string} content
 * @return {string[][]}
 */
const splitReadme = (content) => {
  const lines = content.split('\n');
  const i1 = lines.findIndex((e) => e === '## Packages');
  const i2 = i1 + 1 + [...lines.slice(i1 + 1)].findIndex((e) => e.startsWith('## '));
  const before = lines.slice(0, i1);
  const after = lines.slice(i2);
  return [before, after];
};

const [before, after] = splitReadme(readme);

const pkgDesc = pkgs.flatMap((pkg) => {
  const manifest = JSON.parse(fs.readFileSync(path.resolve(projRoot, 'packages', pkg, 'package.json')));
  if (manifest.private) return [];
  const { name } = manifest;

  const head = `[\`${name}\`](https://www.npmjs.com/package/${name})`;
  return [head, '', '```', `pnpm add ${name} -D`, '```', ''];
});

const readmeOutput = [...before, '## Packages', '', ...pkgDesc, ...after].join('\n');
fs.writeFileSync(readmePath, readmeOutput);
