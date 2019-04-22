module.exports = {
  transform: {
    ".ts": "ts-jest"
  },
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|\\.test)\\.(ts|js)$",
  moduleFileExtensions: ["ts", "js"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,ts}", "!**/node_modules/**", "!**/__tests__/**"],
  coverageDirectory: "coverage"
};
