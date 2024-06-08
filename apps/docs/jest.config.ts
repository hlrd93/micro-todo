module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    moduleNameMapper: {
      '^@repo/ui/(.*)$': '<rootDir>/$1',
    },
};
  