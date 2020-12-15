module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "plugins": [
    "@typescript-eslint",
  ],
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "eol-last": ["error", "always"],
    "no-trailing-spaces": ["error"],
    "unicode-bom": ["error", "never"],
    "linebreak-style": ["error", "unix"],
    "no-multiple-empty-lines": ["error", {
      "max": 2,
      "maxEOF": 1,
      "maxBOF": 0,
    }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "all",
      "args": "none",
      "ignoreRestSiblings": false,
    }],
  },
  "overrides": [
    {
      "files": ["*.ts"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["error", {
          "allowExpressions": true,
          "allowTypedFunctionExpressions": true,
          "allowHigherOrderFunctions": true,
        }],
      },
    },
    {
      "files": ["*.d.ts"],
      "rules": {
        "@typescript-eslint/no-unused-vars": ["off"],
      },
    },
    {
      "files": ["src/**/*.spec.*"],
      "extends": [
        "plugin:jest/recommended",
        "plugin:jest/style",
      ],
      "plugins": [
        "jest",
      ],
    },
    {
      "files": ["cypress/**/*"],
      "extends": [
        "plugin:cypress/recommended",
      ],
      "plugins": [
        "cypress",
      ],
    },
  ],
};
