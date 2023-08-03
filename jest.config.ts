import nextJest from 'next/jest'

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig = {
    verbose: true,
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['<rootDir>/__tests__/setup.ts'],
}

export default createJestConfig(customJestConfig)
