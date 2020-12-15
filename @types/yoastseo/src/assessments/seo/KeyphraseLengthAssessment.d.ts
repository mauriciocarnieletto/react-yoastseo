export default KeyphraseLengthAssessment;
/**
 * Assessment to check whether the keyphrase has a good length.
 */
declare class KeyphraseLengthAssessment extends Assessment {
  /**
     * Sets the identifier and the config.
     *
     * @param {Object} [config] The configuration to use.
     * @param {number} [config.parameters.recommendedMinimum] The recommended minimum length of the keyphrase (in words).
     * @param {number} [config.parameters.acceptableMaximum] The acceptable maximum length of the keyphrase (in words).
     * @param {number} [config.scores.veryBad] The score to return if the length of the keyphrase is below recommended minimum.
     * @param {number} [config.scores.consideration] The score to return if the length of the keyphrase is above acceptable maximum.
     *
     * @returns {void}
     */
  constructor(config?: any);
    identifier: string;
    _config: any;
    _keyphraseLength: any;
    _boundaries: any;
    /**
     * Calculates the result based on the keyphraseLength research.
     *
     * @param {Jed} i18n The object used for translations.
     *
     * @returns {Object} Object with score and text.
     */
    calculateResult(i18n: any): any;
}
import Assessment from "../../assessment";
