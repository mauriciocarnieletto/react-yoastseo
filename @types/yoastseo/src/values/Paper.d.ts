export declare interface PaperAttributes {
  keyword?: string;
  synonyms?: string;
  title?: string;
  description?: string;
  titleWidth?: number;
  url?: string;
  permalink?: string;
  locale?: string;
}

export declare class Paper {
  constructor(text: string, attributes: PaperAttributes);
}
