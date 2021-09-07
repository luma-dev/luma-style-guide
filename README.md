# Luma Style Guide

[![Luma Style Guide](https://img.shields.io/badge/styled%20with-luma-%23c5ebeb?style=flat-square)](https://github.com/luma-dev/luma-style-guide#readme)

Luma coding style guide, specifically for frontend, JavaScript and TypeScript projects.

NOTICE: Are you about to contirubte the projects with this style? If we're in owners of that project, please make PR at first and I will refer to the rules violated in your PR, so it's unnecessary to read this.

## Packages

[`@luma-dev/eslint-config-base`](https://www.npmjs.com/package/@luma-dev/eslint-config-base)

```
pnpm add @luma-dev/eslint-config-base -D
```

[`@luma-dev/eslint-config-jest`](https://www.npmjs.com/package/@luma-dev/eslint-config-jest)

```
pnpm add @luma-dev/eslint-config-jest -D
```

[`@luma-dev/eslint-config-next`](https://www.npmjs.com/package/@luma-dev/eslint-config-next)

```
pnpm add @luma-dev/eslint-config-next -D
```

[`@luma-dev/eslint-config-react`](https://www.npmjs.com/package/@luma-dev/eslint-config-react)

```
pnpm add @luma-dev/eslint-config-react -D
```

[`@luma-dev/eslint-config-svelte`](https://www.npmjs.com/package/@luma-dev/eslint-config-svelte)

```
pnpm add @luma-dev/eslint-config-svelte -D
```

[`@luma-dev/eslint-config-unstyle`](https://www.npmjs.com/package/@luma-dev/eslint-config-unstyle)

```
pnpm add @luma-dev/eslint-config-unstyle -D
```

[`@luma-dev/eslint-plugin-svelte3`](https://www.npmjs.com/package/@luma-dev/eslint-plugin-svelte3)

```
pnpm add @luma-dev/eslint-plugin-svelte3 -D
```

[`@luma-dev/prettier-config`](https://www.npmjs.com/package/@luma-dev/prettier-config)

```
pnpm add @luma-dev/prettier-config -D
```

[`@luma-dev/tsconfig-base`](https://www.npmjs.com/package/@luma-dev/tsconfig-base)

```
pnpm add @luma-dev/tsconfig-base -D
```

[`@luma-dev/tsconfig-next`](https://www.npmjs.com/package/@luma-dev/tsconfig-next)

```
pnpm add @luma-dev/tsconfig-next -D
```

[`@luma-dev/tsconfig-react`](https://www.npmjs.com/package/@luma-dev/tsconfig-react)

```
pnpm add @luma-dev/tsconfig-react -D
```

[`@luma-dev/tsconfig-svelte`](https://www.npmjs.com/package/@luma-dev/tsconfig-svelte)

```
pnpm add @luma-dev/tsconfig-svelte -D
```

## Definition

### NPM Package Type

We define 3 types for npm packages.

- Monorepo Root
- Application
- Library

And _root_ refers to monorepo root if monorepo, otherwise the single directory including the package manifest.

## Rules

- Use tools as newer as possible.
- Keep consistent, simple and verifiable.
- Use [pnpm](https://pnpm.io/) as a package manager.
- Regard build steps as development step, so dependencies only used in dev and build should in `devDependencies`.
- Use TypeScript rather than JavaScript anywhere if possible.
- Use `.npmrc` including following.
  - Place `.npmrc` in every application pacakges and monorepo root.
  - `engine-strict=true` for all non-library packages including subdirectories.
  - `strict-peer-dependencies=true` for root.
  - `save-prefix=` for application pacakges.
- Use `commitlint` with `'@commitlint/config-conventional'`.
- Use `eslnit` with `'@luma-dev/base'` and correspoing ones.
  - Avoid using `eslint-ignore` directives.
- Use `husky` to help developing.
- Use `prettier` with `"@luma-dev/prettier-config"`.
  - File types except JavaScript and TypeScript, run `prettier` by itself.
- Never use `engines` in `package.json` and `engine-strcit=true` for library projects.
  - It causes errors when used by other package managers even if used as dependency.
- Use `jest` for testing framework.
- Place ignore files (`.gitignore`, `.eslintignore`, `.dockerignore`) only in root if possible.
  - Distributed ignore files are troublesome to maintain.
- `.gitignore` can include following.
  - (ignore/a) Files that may be generated by scripts in project.
    - e.g. `node_modules/`, `dist/`, `.pnpm-debug.log`
  - (ignore/b) Files used for locally controlling behavior only in specific occasion.
    - `*.local`
  - (ignore/c) Files generally known as generated in some environments following.
    - `.DS_Store`
    - `.vscode/`
    - `.idea/`
- Ignore files should suffix iff target may be directory generally, if possible.
  - e.g. `node_modules/` (acceptable) vs `node_modules`
- Never include trailing spaces.
- Ignore files except `.gitignore` should never include (ignore/b) and (ignore/c).
  - Build steps should run in reproducable environments like CI or Container.
- Keep top level directory simple, so prefer to pack sources in `src/` directory.
- Use `"type": "module"` in `package.json` if possible.
- Use ESModule rather than CommonJS in setting files.
- Use `.js` instead of `.mjs` or `.m.js`.
- Follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) preceded by [`@luma-dev/prettier-config`](./packages/prettier-config/index.json).

### Package manifest version specifier rules

- Use `~4.0` style for TypeScript.
- Use `^` + fully stated version style for libraries.
- Use pinned version for applications.
  - `save-prefix=` helps to achieve this.

## Commenting Guideline

TBD. Here's draft based on [@twada 's tweet](https://twitter.com/t_wada/status/904916106153828352).

- WHAT for tests.
- WHY for commit messages.
- HOW for function level code comments (`// ...` or `/* ... */`).
- WHY NOT for line level code comments.
- Non-code comments (`/** .. */`) are documentation, so write WHAT.

## Recipes

### Monorepo Root

```js
// .eslintrc.cjs
const configureBase = require('@luma-dev/eslint-config-base/configure');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@luma-dev/base', '@luma-dev/jest'],
  overrides: [...configureBase(__dirname)],
};
```

```ini
; .npmrc
engine-strict=true
strict-peer-dependencies=true
save-prefix=
```

```json
// .prettierrc.json
"@luma-dev/prettier-config"
```

### Application

```js
// .eslintrc.cjs
const configureBase = require('@luma-dev/eslint-config-base/configure');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [...configureBase(__dirname)],
};
```

```ini
; .npmrc
engine-strict=true
save-prefix=
```

### Library

```ini
; .npmrc
save-prefix=^
```

### ESBuild

Version Fixer

```js
// .pnpmfile.cjs
const { esbuild } = require('./package.json').devDependencies;

function readPackage(pkg) {
  for (const section of ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']) {
    if (pkg[section].esbuild) {
      pkg[section].esbuild = esbuild;
    }
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
```

### Add Potentially Unresolvable 

```js
'import/no-unresolved': ['error', {
  ignore: [
    'monaco-editor',
  ],
}],
```

### Badge

```md
[![Luma Style Guide](https://img.shields.io/badge/styled%20with-luma-%23c5ebeb?style=flat-square)](https://github.com/luma-dev/luma-style-guide#readme)
```
