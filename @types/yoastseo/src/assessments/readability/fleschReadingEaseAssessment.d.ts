export default FleschReadingEaseAssessment;
/**
 * Assessment to check how readable the text is, based on the Flesch reading ease test.
 */
declare class FleschReadingEaseAssessment extends Assessment {
  /**
     * Sets the identifier and the config.
     *
     * @param {Object} config The configuration to use.
     * @returns {void}
     */
  constructor(config: any);
    identifier: string;
    _config: any;
    fleschReadingResult: any;
    /**
     * Calculates the assessment result based on the fleschReadingScore.
     *
     * @param {Object} i18n The i18n-object used for parsing translations.
     *
     * @returns {Object} Object with score and resultText.
     */
    calculateResult(i18n: any): any;
}
import Assessment from "../../assessment";
