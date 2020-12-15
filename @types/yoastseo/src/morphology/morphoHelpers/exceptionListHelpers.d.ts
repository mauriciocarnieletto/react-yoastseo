/**
 * Checks whether the word ends in one of the words in an exception list that is a simple array.
 *
 * @param {string}	    word            The word to check.
 * @param {string[]}	exceptionList	The list of exceptions.
 *
 * @returns {boolean}	Whether the checked word ends in one of the words in the exception list.
 */
export function checkIfWordEndingIsOnExceptionList(word: string, exceptionList: string[]): boolean;
/**
 * Checks whether a word is on a verb exception list. Before checking the list, checks whether the word has a verb prefix
 * and if it does, removes it.
 *
 * @param {string}	 	word					The word to check.
 * @param {string[]}	exceptionList			The list of exceptions
 * @param {Object}		compoundVerbPrefixes	The list of separable and inseparable verb prefixes
 * @returns {boolean}	Whether the word was found on the exception list or not
 */
export function checkIfWordIsOnVerbExceptionList(word: string, exceptionList: string[], compoundVerbPrefixes: any): boolean;
/**
 * Checks whether the word ends in one of the words in an exception list with two stems.
 *
 * @param {Array} exceptionListWithTwoStems The exception list with two stems
 * @param {string} word	The word to check
 * @returns {string} The stem
 */
export function checkExceptionListWithTwoStems(exceptionListWithTwoStems: any[], word: string): string;
