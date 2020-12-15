const esModules = ["@yoast", "lodash-es"].join("|");

module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  transformIgnorePatterns: [
    `/node_modules/(?!${esModules})/`,
  ],
  roots: [
    "<rootDir>/jest/unit",
  ],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
  setupFiles: [
    "<rootDir>/jest/support/index.ts",
  ],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/jest/tsconfig.json",
    },
  },
};
