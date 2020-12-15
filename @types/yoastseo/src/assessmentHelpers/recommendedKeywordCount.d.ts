/**
 * Calculates a recommended keyword count for a text. The formula to calculate this number is based on the
 * keyword density formula.
 *
 * @param {string} text The paper text.
 * @param {number} keyphraseLength The length of the focus keyphrase in words.
 * @param {number} recommendedKeywordDensity The recommended keyword density (either maximum or minimum).
 * @param {string} maxOrMin Whether it's a maximum or minimum recommended keyword density.
 *
 * @returns {number} The recommended keyword count.
 */
export default function _default(text: string, keyphraseLength: number, recommendedKeywordDensity: number, maxOrMin: string): number;
