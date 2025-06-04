module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./setup.js'],
  testMatch: ['**/app/api/**/*.test.ts', '**/src/**/*.test.ts', '**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/\\.next/'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};