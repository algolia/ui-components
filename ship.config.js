module.exports = {
  monorepo: {
    mainVersionFile: 'lerna.json',
    // We rely on Lerna to bump our dependencies.
    packagesToBump: [],
    packagesToPublish: [
      'packages/horizontal-slider-js',
      'packages/horizontal-slider-react',
      'packages/horizontal-slider-theme',
      'packages/horizontal-slider-vdom',
      'packages/highlighting-snippeting-vdom',
      'packages/shared',
    ],
  },
  publishCommand({ tag }) {
    return `yarn publish --access public --tag ${tag}`;
  },
  versionUpdated({ exec, version }) {
    // Update package dependencies
    exec(
      `yarn lerna version ${version} --exact --no-git-tag-version --no-push --yes`
    );

    // Ship.js reads JSON and writes with `fs.writeFileSync(JSON.stringify(json, null, 2))`
    // which causes a lint error in the `lerna.json` file.
    exec('yarn eslint lerna.json --fix');
  },
  // Skip preparation if it contains only `chore` commits
  shouldPrepare({ releaseType, commitNumbersPerType }) {
    const { fix = 0 } = commitNumbersPerType;

    if (releaseType === 'patch' && fix === 0) {
      return false;
    }

    return true;
  },
};
