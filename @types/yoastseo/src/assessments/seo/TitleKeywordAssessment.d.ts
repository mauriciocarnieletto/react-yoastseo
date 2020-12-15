export default TitleKeywordAssessment;
/**
 * Assessment to check whether the keyword is included in (the beginning of) the SEO title.
 */
declare class TitleKeywordAssessment extends Assessment {
  /**
     * Sets the identifier and the config.
     *
     * @param {Object} [config] The configuration to use.
     * @param {number} [config.parameters.recommendedPosition] The recommended position of the keyword within the title.
     * @param {number} [config.scores.good] The score to return if the keyword is found at the recommended position.
     * @param {number} [config.scores.okay] The score to return if the keyword is found, but not at the recommended position.
     * @param {number} [config.scores.bad] The score to return if there are fewer keyword occurrences than the recommended minimum.
     * @param {string} [config.url] The URL to the relevant article on Yoast.com.
     *
     * @returns {void}
     */
  constructor(config?: any);
    identifier: string;
    _config: any;
    _keywordMatches: any;
    _keyword: any;
    /**
     * Calculates the result based on whether and how the keyphrase was matched in the title. Returns GOOD result if
     * an exact match of the keyword is found in the beginning of the title. Returns OK results if all content words
     * from the keyphrase are in the title (in any form). Returns BAD otherwise.
     *
     * @param {Jed} i18n The object used for translations.
     * @param {string} keyword The keyword of the paper (to be returned in the feedback strings).
     *
     * @returns {Object} Object with score and text.
     */
    calculateResult(i18n: any, keyword: string): any;
}
import Assessment from "../../assessment";
