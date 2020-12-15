/**
 * Assessment that will test if the text is long enough.
 */
export default class TextLengthAssessment extends Assessment {
  /**
     * Sets the identifier and the config.
     *
     * @param {Object} [config] The configuration to use.
     *
     * @returns {void}
     */
  constructor(config?: any);
    identifier: string;
    _config: any;
    /**
     * Returns the score and the appropriate feedback string based on the current word count.
     *
     * @param {number} wordCount The amount of words to be checked against.
     * @param {Jed} i18n The locale object.
     *
     * @returns {Object} The score and the feedback string.
     */
    calculateResult(wordCount: number, i18n: any): any;
}
import Assessment from "../../assessment";
