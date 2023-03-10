import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/app/**/*.{ts,tsx}',
    'src/pages/**/*.{ts,tsx}',
    'src/shared/**/*.{ts,tsx}',
    'src/entities/**/*.{ts,tsx}',
    '!src/shared/constants/**/*.ts',
    '!**/node_modules/**',
  ],
  coverageReporters: ['lcov'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testRegex: '.*\\.spec\\.tsx?$',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^app(.*)$': '<rootDir>/src/app$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^shared/ui(.*)$': '<rootDir>/src/shared/ui$1',
    '^shared/lib(.*)$': '<rootDir>/src/shared/lib$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
  },
}

export default config
