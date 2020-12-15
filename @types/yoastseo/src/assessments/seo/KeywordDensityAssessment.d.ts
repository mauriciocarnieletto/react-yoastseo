export default KeywordDensityAssessment;
/**
 * Represents the assessment that will look if the keyphrase density is within the recommended range.
 */
declare class KeywordDensityAssessment extends Assessment {
  /**
     * Sets the identifier and the config.
     *
     * @param {Object} [config] The configuration to use.
     *
     * If word forms are not available:
     * @param {number} [config.parameters.noWordForms.overMaximum] The percentage of keyphrase instances in the text that
     * is way over the maximum.
     * @param {number} [config.parameters.noWordForms.maximum] The maximum percentage of keyphrase instances in the text.
     * @param {number} [config.parameters.noWordForms.minimum] The minimum percentage of keyphrase instances in the text.
     *
     * If word forms are available:
     * @param {number} [config.parameters.multipleWordForms.overMaximum] The percentage of keyphrase instances in the text that
     * is way over the maximum.
     * @param {number} [config.parameters.multipleWordForms.maximum] The maximum percentage of keyphrase instances in the text.
     * @param {number} [config.parameters.multipleWordForms.minimum] The minimum percentage of keyphrase instances in the text.
     *
     * @param {number} [config.scores.wayOverMaximum] The score to return if there are way too many instances of keyphrase in the text.
     * @param {number} [config.scores.overMaximum] The score to return if there are too many instances of keyphrase in the text.
     * @param {number} [config.scores.correctDensity] The score to return if there is a good number of keyphrase instances in the text.
     * @param {number} [config.scores.underMinimum] The score to return if there is not enough keyphrase instances in the text.
     *
     * @param {string} [config.url] The URL to the relevant KB article.
     *
     * @returns {void}
     */
  constructor(config?: any);
    identifier: string;
    _config: any;
    /**
     * Determines correct boundaries depending on the availability
     * of morphological forms.
     *
     * @param {string} text The paper text.
     * @param {number} keyphraseLength The length of the keyphrase in words.
     *
     * @returns {void}
     */
    setBoundaries(text: string, keyphraseLength: number): void;
    _boundaries: any;
    _minRecommendedKeywordCount: number;
    _maxRecommendedKeywordCount: number;
    _hasMorphologicalForms: boolean;
    _keywordCount: any;
    _keywordDensity: any;
    /**
     * Checks whether there are no keyphrase matches in the text.
     *
     * @returns {boolean} Returns true if the keyphrase count is 0.
     */
    hasNoMatches(): boolean;
    /**
     * Checks whether there are too few keyphrase matches in the text.
     *
     * @returns {boolean} Returns true if the rounded keyword density is between 0 and the recommended minimum
     * or if there there is only 1 keyword match (regardless of the density).
     */
    hasTooFewMatches(): boolean;
    /**
     * Checks whether there is a good number of keyphrase matches in the text.
     *
     * @returns {boolean} Returns true if the rounded keyword density is between the recommended minimum
     * and the recommended maximum or if the keyword count is 2 and the recommended minimum is lower than 2.
     */
    hasGoodNumberOfMatches(): boolean;
    /**
     * Checks whether the number of keyphrase matches in the text is between the
     * recommended maximum and the specified overMaximum value.
     *
     * @returns {boolean} Returns true if the rounded keyphrase density is between
     *                    the recommended maximum and the specified overMaximum
     *                    value.
     */
    hasTooManyMatches(): boolean;
    /**
     * Returns the score for the keyphrase density.
     *
     * @param {Jed} i18n The object used for translations.
     *
     * @returns {Object} The object with calculated score and resultText.
     */
    calculateResult(i18n: any): any;
    /**
     * Marks keywords in the text for the keyword density assessment.
     *
     * @returns {Array<Mark>} Marks that should be applied.
     */
    getMarks(): Array<any>;
}
import Assessment from "../../assessment.js";
