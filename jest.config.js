/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 100,
      lines: 70,
      statements: -10,
    },
  },
  coverageReporters: ["lcov", "text"],
  coverageDirectory: "./output/code-coverage/",
};
