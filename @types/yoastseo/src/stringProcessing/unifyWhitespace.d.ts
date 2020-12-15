declare namespace _default {
    export { unifyNonBreakingSpace };
    export { unifyWhiteSpace };
    export { unifyAllSpaces };
}
export default _default;
/** @module stringProcessing/unifyWhitespace */
/**
 * Replaces a non breaking space with a normal space
 * @param {string} text The string to replace the non breaking space in.
 * @returns {string} The text with unified spaces.
 */
export function unifyNonBreakingSpace(text: string): string;
/**
 * Replaces all whitespaces with a normal space
 * @param {string} text The string to replace the non breaking space in.
 * @returns {string} The text with unified spaces.
 */
export function unifyWhiteSpace(text: string): string;
/**
 * Converts all whitespace to spaces.
 *
 * @param {string} text The text to replace spaces.
 * @returns {string} The text with unified spaces.
 */
export function unifyAllSpaces(text: string): string;
