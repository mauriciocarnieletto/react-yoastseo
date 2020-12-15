export default UrlKeywordAssessment;
/**
 * Represents the URL keyword assessments. This assessments will check if the keyword is present in the url.
 */
declare class UrlKeywordAssessment extends Assessment {
  /**
     * Sets the identifier and the config.
     *
     * @param {Object} config The configuration to use.
     * @param {number} [config.scores.noKeywordInUrl] The score to return if the keyword is not in the URL.
     * @param {number} [config.scores.good] The score to return if the keyword is in the URL.
     * @param {string} [config.url] The URL to the relevant KB article.
     *
     * @returns {void}
     */
  constructor(config?: any);
    identifier: string;
    _config: any;
    _keywordInURL: any;
    /**
     * Determines the score and the result text based on whether or not there's a keyword in the url.
     *
     * @param {Jed} i18n The object used for translations.
     *
     * @returns {Object} The object with calculated score and resultText.
     */
    calculateResult(i18n: any): any;
}
import Assessment from "../../assessment";
