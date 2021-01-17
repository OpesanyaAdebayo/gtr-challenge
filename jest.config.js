/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverage: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  testMatch: [
    '**/src/**/*.test.js',
    '**/integrationTests/**/*.test.js',
  ],
};
