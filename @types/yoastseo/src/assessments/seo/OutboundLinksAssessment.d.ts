/**
 * Assessment for calculating the outbound links in the text.
 */
export default class OutboundLinksAssessment extends Assessment {
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
     * Returns a score based on the linkStatistics object.
     *
     * @param {object} linkStatistics The object with all link statistics.
     *
     * @returns {number|null} The calculated score.
     */
    calculateScore(linkStatistics: object): number | null;
    /**
     * Translates the score to a message the user can understand.
     *
     * @param {Object} linkStatistics The object with all link statistics.
     * @param {Jed} i18n The object used for translations.
     *
     * @returns {string} The translated string.
     */
    translateScore(linkStatistics: any, i18n: any): string;
}
import Assessment from "../../assessment";
