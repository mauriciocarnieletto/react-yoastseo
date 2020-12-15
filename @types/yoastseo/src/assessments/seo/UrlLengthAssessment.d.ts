export default UrlLengthAssessment;
/**
 * Assessment that checks if the url is long enough.
 */
declare class UrlLengthAssessment extends Assessment {
  /**
     * Sets the identifier and the config.
     *
     * @param {Object} [config] The configuration to use.
     *
     * @returns {void}
     *
     * @deprecated since 1.48. We have removed it from the assessments since we do not consider it an important SEO factor anymore.
     */
  constructor(config?: any);
    identifier: string;
    _config: any;
    /**
     * Calculates the score based on the url length.
     *
     * @param {boolean} urlIsTooLong True when the URL is too long.
     *
     * @returns {number|null} The calculated score.
     */
    calculateScore(urlIsTooLong: boolean): number | null;
    /**
     * Translates the score to a message the user can understand.
     *
     * @param {boolean} urlIsTooLong True when the URL is too long.
     * @param {Jed} i18n The object used for translations.
     *
     * @returns {string} The translated string.
     */
    translateScore(urlIsTooLong: boolean, i18n: any): string;
}
import Assessment from "../../assessment";
