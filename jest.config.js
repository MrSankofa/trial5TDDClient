module.exports = {
  setupFiles: ['<rootDir>/enzyme.config.js'],
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  testMatch: [
    '<rootDir>/__tests__/*.js'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/react'],
  verbose: true
}