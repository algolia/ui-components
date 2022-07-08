module.exports = {
  rootDir: process.cwd(),
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testPathIgnorePatterns: ['node_modules/', 'dist/'],
  coveragePathIgnorePatterns: ['node_modules/', 'dist/'],
  globals: {
    __DEV__: true,
    __TEST__: true,
  },
  moduleNameMapper: {
    '^@algolia/ui-components-(.*)$': '<rootDir>/packages/$1/src/',
  },
};
