/**
 * Assessment for calculating the length of the meta description.
 */
export default class MetaDescriptionLengthAssessment extends Assessment {
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
     * Returns the score for the descriptionLength.
     *
     * @param {number} descriptionLength The length of the metadescription.
     *
     * @returns {number} The calculated score.
     */
    calculateScore(descriptionLength: number): number;
    /**
     * Translates the descriptionLength to a message the user can understand.
     *
     * @param {number} descriptionLength The length of the metadescription.
     * @param {object} i18n The object used for translations.
     *
     * @returns {string} The translated string.
     */
    translateScore(descriptionLength: number, i18n: object): string;
}
import Assessment from "../../assessment";
