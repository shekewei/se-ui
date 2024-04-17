module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // 支持测试环境访问dom
  moduleNameMapper: {
    'components/(.*)': '<rootDir>/src/components/$1',
    'utils/(.*)': '<rootDir>/src/utils/$1',
    'shared/(.*)': '<rootDir>/src/shared/$1'
  },
  // 配置测试环境ua
  testEnvironmentOptions: {
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
  }
}
