const fs = require('fs');

fs.writeFileSync(
  '../../package.json',
  JSON.stringify(
    Object.assign(require('../../package.json'), {
      resolutions: {
        preact: 'file:./scripts/empty-package',
        '@types/react': 'file:./scripts/empty-package',
        '@types/react-dom': 'file:./scripts/empty-package',
        '@types/react-test-renderer': 'file:./scripts/empty-package',
      },
    }),
    null,
    2
  )
);
