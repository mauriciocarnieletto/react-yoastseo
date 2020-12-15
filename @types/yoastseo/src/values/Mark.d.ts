export default Mark;
/**
 * Represents a marked piece of text
 *
 * @param {Object} properties The properties of this Mark.
 * @param {string} properties.original The original text that should be marked.
 * @param {string} properties.marked The new text including marks.
 * @constructor
 */
declare function Mark(properties: {
    original: string;
    marked: string;
}): void;
declare class Mark {
  /**
     * Represents a marked piece of text
     *
     * @param {Object} properties The properties of this Mark.
     * @param {string} properties.original The original text that should be marked.
     * @param {string} properties.marked The new text including marks.
     * @constructor
     */
  constructor(properties: {
        original: string;
        marked: string;
    });
    _properties: {
        original: string;
        marked: string;
    };
    getOriginal(): string;
    getMarked(): string;
    applyWithReplace(text: string): string;
    serialize(): any;
}
declare namespace Mark {
    function parse(serialized: any): Mark;
}
