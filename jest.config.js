const esModules = ["@yoast", "lodash-es"].join("|");

module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  transformIgnorePatterns: [
    `/node_modules/(?!${esModules})/`,
  ],
  roots: [
    "<rootDir>/test/unit",
  ],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
  setupFiles: [
    "<rootDir>/test/support/index.ts",
  ],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/test/tsconfig.json",
    },
  },
};
