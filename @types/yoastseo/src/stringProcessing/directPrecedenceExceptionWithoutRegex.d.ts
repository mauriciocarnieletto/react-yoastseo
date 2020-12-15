/**
 * Checks whether the participle is directly preceded by a word from the direct precedence exception list.
 * If this is the case, the sentence part is not passive.
 *
 * @param {string} sentencePart The sentence part that contains the participle.
 * @param {string} participle   The participle.
 * @param {string} language     The language of the participle.
 *
 * @returns {boolean} Returns true if a word from the direct precedence exception list is directly preceding
 *                    the participle, otherwise returns false.
 */
export default function _default(sentencePart: string, participle: string, language: string): boolean;
