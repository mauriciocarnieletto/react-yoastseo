export default singleH1Assessment;
/**
 * Assessment to check whether the body of the text contains H1s in the body (except at the very beginning,
 * where they are acceptable).
 */
declare class singleH1Assessment extends Assessment {
  /**
     * Sets the identifier and the config.
     *
     * @param {Object} config The configuration to use.
     *
     * @returns {void}
     */
  constructor(config?: any);
    identifier: string;
    _config: any;
    _h1s: any;
    /**
     * Checks whether an H1 is in the first position of the body.
     *
     * @returns {boolean} Returns true if there is an H1 in the first position of the body.
     */
    firstH1AtBeginning(): boolean;
    /**
     * Returns the score and the feedback string for the single H1 assessment.
     *
     * @param {Jed} i18n The object used for translations.
     *
     * @returns {Object|null} The calculated score and the feedback string.
     */
    calculateResult(i18n: any): any | null;
    /**
     * Marks all H1s in the body of the text (except at the very beginning,
     * where they are acceptable and don't need to be changed).
     *
     * @returns {Array} Array with all the marked H1s.
     */
    getMarks(): any[];
}
import Assessment from "../../assessment.js";
