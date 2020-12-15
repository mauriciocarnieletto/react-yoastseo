const preprocessor = require("cypress-rollup-preprocessor");

const path = require("path");
const resolve = require("@rollup/plugin-node-resolve").default;
const typescript = require("rollup-plugin-typescript2");

const plugins = [
  typescript({
    tsconfig: path.resolve(__dirname, "..", "tsconfig.json"),
    tsconfigOverride: {
      compilerOptions: {
        module: "ESNext",
      },
    },
  }),
  resolve(),
];

module.exports = preprocessor({
  rollupOptions: {
    plugins,
  },
});
