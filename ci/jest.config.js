module.exports = {
  preset: 'jest-puppeteer',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/serviceWorker.js"
  ]
}
