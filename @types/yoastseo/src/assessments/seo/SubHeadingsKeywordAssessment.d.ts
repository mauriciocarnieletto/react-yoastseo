/**
 * Represents the assessment that checks if the keyword is present in one of the subheadings.
 */
export default class SubHeadingsKeywordAssessment extends Assessment {
  /**
     * Sets the identifier and the config.
     *
     * @param {object} config The configuration to use.
     *
     * @returns {void}
     */
  constructor(config?: object);
    identifier: string;
    _config: any;
    _subHeadings: any;
    _minNumberOfSubheadings: number;
    _maxNumberOfSubheadings: number;
    /**
     * Checks whether the paper has a subheadings.
     *
     * @param {Paper} paper The paper to use for the check.
     *
     * @returns {boolean} True when there is at least one subheading.
     */
    hasSubheadings(paper: any): boolean;
    /**
     * Checks whether there are too few subheadings with the keyphrase.
     *
     * This is the case if the number of subheadings with the keyphrase is more than 0 but less than the specified
     * recommended minimum.
     *
     * @returns {boolean} Returns true if the keyphrase is included in too few subheadings.
     */
    hasTooFewMatches(): boolean;
    /**
     * Checks whether there are too many subheadings with the keyphrase.
     *
     * The upper limit is only applicable if there is more than one subheading. If there is only one subheading with
     * the keyphrase this would otherwise always lead to a 100% match rate.
     *
     * @returns {boolean} Returns true if there is more than one subheading and if the keyphrase is included in less
     *                    subheadings than the recommended maximum.
     */
    hasTooManyMatches(): boolean;
    /**
     * Checks whether there is only one higher-level subheading and this subheading includes the keyphrase.
     *
     * @returns {boolean} Returns true if there is exactly one higher-level subheading and this
     * subheading has a keyphrase match.
     */
    isOneOfOne(): boolean;
    /**
     * Checks whether there is a good number of subheadings with the keyphrase.
     *
     * This is the case if there is only one subheading and that subheading includes the keyphrase or if the number of
     * subheadings with the keyphrase is within the specified recommended range.
     *
     * @returns {boolean} Returns true if the keyphrase is included in a sufficient number of subheadings.
     */
    hasGoodNumberOfMatches(): boolean;
    /**
     * Determines the score and the Result text for the subheadings.
     *
     * @param {Object} i18n The object used for translations.
     *
     * @returns {Object} The object with the calculated score and the result text.
     */
    calculateResult(i18n: any): any;
}
import Assessment from "../../assessment";
