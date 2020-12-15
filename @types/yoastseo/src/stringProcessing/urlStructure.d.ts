export default UrlStructure;
/**
 * Represents a URL structure. Placeholders can be defined using %%placeholder%% and can later be filled using the `applyData` method.
 *
 * @since 1.8.0
 */
declare class UrlStructure {
  /**
     * Parses a URL for static and variable parts. Variables should be surrounded by double percentage signs.
     *
     * @since 1.8.0
     *
     * @param {string} url The URL to parse.
     * @returns {UrlStructure} The parsed url structure.
     */
  static fromUrl(url: string): UrlStructure;
  /**
     * Sets the structure to the passed structure.
     *
     * @since 1.8.0
     *
     * @param {Array} structure The structure of the URL.
     */
  constructor(structure: any[]);
    _structure: any[];
    /**
     * Builds a URL from this URL structure and the given data.
     *
     * @since 1.8.0
     *
     * @param {Object} data A key value store of all the variable parts of the URL structure.
     * @returns {string} A URL with all variables parts filled.
     */
    buildUrl(data: any): string;
    /**
     * Builds a URL part for a small part of the URL.
     *
     * @since 1.8.0
     *
     * @private
     *
     * @param {Object} data The data to fill the URL parts.
     * @param {Object} urlPartConfig The config for the URL part.
     * @returns {string} A URL part.
     */
    private _buildVariablePart;
    /**
     * Returns the structure.
     *
     * @since 1.8.0
     *
     * @returns {Array} The structure of the URL.
     */
    getStructure(): any[];
}
