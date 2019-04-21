module.exports = {
  transform: {
    ".ts": "ts-jest"
  },
  testEnvironment: "node",
  testRegex: "src/__tests__/.*test\\.(ts|js)$",
  moduleFileExtensions: ["ts", "js"],
  coveragePathIgnorePatterns: ["/node_modules/", "src/**/__tests__/**/*"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  collectCoverageFrom: ["src/**/*.{js,ts}"]
};
