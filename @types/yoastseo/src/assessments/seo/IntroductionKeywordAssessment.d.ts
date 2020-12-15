export default IntroductionKeywordAssessment;
/**
 * Assessment to check whether the keyphrase or synonyms are encountered in the first paragraph of the article.
 */
declare class IntroductionKeywordAssessment extends Assessment {
  /**
     * Sets the identifier and the config.
     *
     * @param {Object} [config] The configuration to use.
     * @param {number} [config.scores.good] The score to return if there is a match within one sentence in the first paragraph.
     * @param {number} [config.scores.okay] The score to return if all words are matched in the first paragraph.
     * @param {number} [config.scores.bad] The score to return if not all words are matched in the first paragraph.
     * @param {string} [config.url] The URL to the relevant article on Yoast.com.
     *
     * @returns {void}
     */
  constructor(config?: any);
    identifier: string;
    _config: any;
    _firstParagraphMatches: any;
    /**
     * Returns a result based on the number of occurrences of keyphrase in the first paragraph.
     *
     * @param {Jed} i18n The object used for translations.
     *
     * @returns {Object} result object with a score and translation text.
     */
    calculateResult(i18n: any): any;
}
import Assessment from "../../assessment";
