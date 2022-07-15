const removeFromPeerDeps = ['typescript'];
const fixDeps = ['esbuild'];

function readPackage(pkg) {
  for (const section of ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']) {
    for (const dep of fixDeps) {
      if (pkg[section][dep]) {
        pkg[section][dep] = require('./package.json').devDependencies[dep];
      }
    }
  }
  for (const section of ['peerDependencies']) {
    for (const dep of removeFromPeerDeps) {
      if (pkg[section][dep]) {
        delete pkg[section][dep];
      }
    }
  }

  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
