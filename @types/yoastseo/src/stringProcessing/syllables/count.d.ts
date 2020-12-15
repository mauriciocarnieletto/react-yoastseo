export default countSyllablesInText;
/**
 * Counts the number of syllables in a text per word based on vowels.
 * Uses exclusion words for words that cannot be matched with vowel matching.
 *
 * @param {String} text The text to count the syllables of.
 * @param {String} locale The locale to use for counting syllables.
 * @returns {int} The total number of syllables found in the text.
 */
declare function countSyllablesInText(text: string, locale: string): any;
