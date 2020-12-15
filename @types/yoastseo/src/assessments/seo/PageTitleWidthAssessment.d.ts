/**
 * Represents the assessment that will calculate if the width of the page title is correct.
 */
export default class PageTitleWidthAssessment extends Assessment {
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
     * Returns the maximum length.
     *
     * @returns {number} The maximum length.
     */
    getMaximumLength(): number;
    /**
     * Returns the score for the pageTitleWidth
     *
     * @param {number} pageTitleWidth The width of the pageTitle.
     *
     * @returns {number} The calculated score.
     */
    calculateScore(pageTitleWidth: number): number;
    /**
     * Translates the pageTitleWidth score to a message the user can understand.
     *
     * @param {number} pageTitleWidth The width of the pageTitle.
     * @param {Jed} i18n The object used for translations.
     *
     * @returns {string} The translated string.
     */
    translateScore(pageTitleWidth: number, i18n: any): string;
}
import Assessment from "../../assessment";
