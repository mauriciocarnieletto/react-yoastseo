import * as ReactYoastSeo from "@/index";

export {};

declare global {
  interface Window {
    readonly ReactYoastSeo: typeof ReactYoastSeo;
  }
}
