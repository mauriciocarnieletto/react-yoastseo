declare namespace _default {
    export { getWordCombinations };
    export { getRelevantWords };
    export { calculateOccurrences };
    export { getRelevantCombinations };
    export { sortCombinations };
    export { filterFunctionWordsAtEnding };
    export { filterFunctionWordsAtBeginning };
    export { filterFunctionWordsAtBeginningAndEnding as filterFunctionWords };
    export { filterFunctionWordsAnywhere };
    export { filterOnDensity };
    export { filterOneCharacterWordCombinations };
    export { filterEndingWith };
}
export default _default;
/**
 * Returns the word combinations for the given text based on the combination size.
 *
 * @param {string} text The text to retrieve combinations for.
 * @param {number} combinationSize The size of the combinations to retrieve.
 * @param {Function} functionWords The function containing the lists of function words.
 * @returns {WordCombination[]} All word combinations for the given text.
 */
export function getWordCombinations(text: string, combinationSize: number, functionWords: Function): WordCombination[];
/**
 * Returns the relevant words in a given text.
 *
 * @param {string} text The text to retrieve the relevant words of.
 * @param {string} locale The paper's locale.
 * @returns {WordCombination[]} All relevant words sorted and filtered for this text.
 */
export function getRelevantWords(text: string, locale: string): WordCombination[];
/**
 * Calculates occurrences for a list of word combinations.
 *
 * @param {WordCombination[]} wordCombinations The word combinations to calculate occurrences for.
 * @returns {WordCombination[]} Word combinations with their respective occurrences.
 */
export function calculateOccurrences(wordCombinations: WordCombination[]): WordCombination[];
/**
 * Returns only the relevant combinations from a list of word combinations. Assumes
 * occurrences have already been calculated.
 *
 * @param {WordCombination[]} wordCombinations A list of word combinations.
 * @returns {WordCombination[]} Only relevant word combinations.
 */
export function getRelevantCombinations(wordCombinations: WordCombination[]): WordCombination[];
/**
 * Sorts combinations based on their relevance and length.
 *
 * @param {WordCombination[]} wordCombinations The combinations to sort.
 * @returns {void}
 */
export function sortCombinations(wordCombinations: WordCombination[]): void;
/**
 * Filters word combinations ending with certain function words.
 *
 * @param {WordCombination[]} wordCombinations The word combinations to filter.
 * @param {array} functionWords The list of function words.
 * @returns {WordCombination[]} Filtered word combinations.
 */
export function filterFunctionWordsAtEnding(wordCombinations: WordCombination[], functionWords: any[]): WordCombination[];
/**
 * Filters word combinations beginning with certain function words.
 *
 * @param {WordCombination[]} wordCombinations The word combinations to filter.
 * @param {array} functionWords The list of function words.
 * @returns {WordCombination[]} Filtered word combinations.
 */
export function filterFunctionWordsAtBeginning(wordCombinations: WordCombination[], functionWords: any[]): WordCombination[];
/**
 * Filters the list of word combination objects based on the language-specific function word filters.
 * Word combinations with specific parts of speech are removed.
 *
 * @param {Array} combinations The list of word combination objects.
 * @param {Function} functionWords The function containing the lists of function words.
 * @returns {Array} The filtered list of word combination objects.
 */
export function filterFunctionWords(combinations: any[], functionWords: Function): any[];
/**
 * Filters word combinations containing certain function words at any position.
 *
 * @param {WordCombination[]} wordCombinations The word combinations to filter.
 * @param {array} functionWords The list of function words.
 * @returns {WordCombination[]} Filtered word combinations.
 */
export function filterFunctionWordsAnywhere(wordCombinations: WordCombination[], functionWords: any[]): WordCombination[];
/**
 * Filters word combinations based on keyword density if the word count is 200 or over.
 *
 * @param {WordCombination[]} wordCombinations The word combinations to filter.
 * @param {number} wordCount The number of words in the total text.
 * @param {number} lowerLimit The lower limit of keyword density.
 * @param {number} upperLimit The upper limit of keyword density.
 * @returns {WordCombination[]} Filtered word combinations.
 */
export function filterOnDensity(wordCombinations: WordCombination[], wordCount: number, lowerLimit: number, upperLimit: number): WordCombination[];
/**
 * Filters word combinations that consist of a single one-character word.
 *
 * @param {WordCombination[]} wordCombinations The word combinations to filter.
 * @returns {WordCombination[]} Filtered word combinations.
 */
export function filterOneCharacterWordCombinations(wordCombinations: WordCombination[]): WordCombination[];
/**
 * Filters combinations based on whether they end with a specified string or not.
 *
 * @param {WordCombination[]} wordCombinations The array of WordCombinations to filter.
 * @param {string} str The string the WordCombinations that need to be filtered out end with.
 * @param {string[]} exceptions The array of strings containing exceptions to not filter.
 * @returns {WordCombination[]} The filtered array of WordCombinations.
 */
export function filterEndingWith(wordCombinations: WordCombination[], str: string, exceptions: string[]): WordCombination[];
/**
 * Filters word combinations beginning and ending with certain function words.
 *
 * @param {WordCombination[]} wordCombinations The word combinations to filter.
 * @param {Array} functionWords The list of function words.
 * @returns {WordCombination[]} Filtered word combinations.
 */
declare function filterFunctionWordsAtBeginningAndEnding(wordCombinations: WordCombination[], functionWords: any[]): WordCombination[];
import WordCombination from "../values/WordCombination.js";
