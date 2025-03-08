module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./setup.js'],
  testMatch: ['**/app/api/**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};