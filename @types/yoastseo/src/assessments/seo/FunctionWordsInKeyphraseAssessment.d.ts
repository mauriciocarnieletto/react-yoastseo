export default FunctionWordsInKeyphraseAssessment;
/**
 * Assessment to check whether the keyphrase only contains function words.
 */
declare class FunctionWordsInKeyphraseAssessment extends Assessment {
  /**
     * Sets the identifier and the config.
     *
     * @param {Object} [config] The configuration to use.
     * @param {number} [config.scores.onlyFunctionWords] The score to return if the keyphrase contains only function words.
     * @param {string} [config.urlTitle] The URL to the relevant KB article.
     * @param {string} [config.urlCallToAction] The URL to the call-to-action article.
     *
     * @returns {void}
     */
  constructor(config?: any);
    identifier: string;
    _config: any;
    _functionWordsInKeyphrase: any;
    _keyword: any;
}
import Assessment from "../../assessment";
