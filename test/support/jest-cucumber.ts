import path from "path";
import { defineFeature, loadFeature } from "jest-cucumber";

type LoadFeature = typeof loadFeature;
type DefineFeature = typeof defineFeature;

global.loadFeature = (featureFilePath, options) =>
  loadFeature(
    path.resolve(__dirname, "..", "..", "features", `${featureFilePath}.feature`),
    options,
  );

global.defineFeature = defineFeature;

declare global {
  const loadFeature: LoadFeature;
  const defineFeature: DefineFeature;

  namespace NodeJS {
    interface Global {
      loadFeature: LoadFeature;
      defineFeature: DefineFeature;
    }
  }
}
