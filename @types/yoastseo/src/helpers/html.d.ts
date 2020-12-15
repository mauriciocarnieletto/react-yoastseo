declare namespace _default {
    export { blockElements };
    export { inlineElements };
    export { isBlockElement };
    export { isInlineElement };
    export { memoizedGetBlocks as getBlocks };
}
export default _default;
export const blockElements: string[];
export const inlineElements: string[];
/**
 * Returns whether or not the given element name is a block element.
 *
 * @param {string} htmlElementName The name of the HTML element.
 * @returns {boolean} Whether or not it is a block element.
 */
export function isBlockElement(htmlElementName: string): boolean;
/**
 * Returns whether or not the given element name is an inline element.
 *
 * @param {string} htmlElementName The name of the HTML element.
 * @returns {boolean} Whether or not it is an inline element.
 */
export function isInlineElement(htmlElementName: string): boolean;
declare const memoizedGetBlocks: any;
export { memoizedGetBlocks as getBlocks };
