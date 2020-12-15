/**
 * Checks whether there are any exception words in between the auxiliary and participle. If there are, it doesn't return a passive.
 *
 * @param {string} sentencePart The sentence part that contains the participle.
 * @param {string} participle The participle in the sentence part.
 * @param {string} auxiliaries One or more auxiliaries in the sentence part.
 * @param {string} language The language of the participle.
 *
 * @returns {boolean} Returns true if a word from the 'cannot be between passive auxiliary and participle' exception list
 * appears anywhere in between the last (closest to participle) auxiliary and the participle.
 */
export default function _default(sentencePart: string, participle: string, auxiliaries: string, language: string): boolean;
