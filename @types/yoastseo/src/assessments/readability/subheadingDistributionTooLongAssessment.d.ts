export default SubheadingsDistributionTooLong;
/**
 * Represents the assessment for calculating the text after each subheading.
 */
declare class SubheadingsDistributionTooLong extends Assessment {
  /**
     * Sets the identifier and the config.
     *
     * @param {Object} config The configuration to use.
     * @returns {void}
     */
  constructor(config?: any);
    identifier: string;
    _config: any;
    _subheadingTextsLength: any;
    _tooLongTextsNumber: any;
    _hasSubheadings: boolean;
    _textLength: number;
    /**
     * Checks whether the paper has subheadings.
     *
     * @param {Paper} paper The paper to use for the assessment.
     *
     * @returns {boolean} True when there is at least one subheading.
     */
    hasSubheadings(paper: any): boolean;
    /**
     * Counts the number of subheading texts that are too long.
     *
     * @returns {number} The number of subheading texts that are too long.
     */
    getTooLongSubheadingTexts(): number;
    /**
     * Calculates the score and creates a feedback string based on the subheading texts length.
     *
     * @param {Object} i18n The object used for translations.
     *
     * @returns {Object} The calculated result.
     */
    calculateResult(i18n: any): any;
}
import Assessment from "../../assessment";
