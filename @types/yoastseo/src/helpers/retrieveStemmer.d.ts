/**
 * Retrieves a stemmer function from the factory.
 * Returns the identity function if the language does not have a stemmer or if morphology data isn't available.
 *
 * @param {string} language         The language to retrieve a stemmer function for.
 * @param {Object} morphologyData   The morphology data.
 *
 * @returns {Function} A stemmer function for the language.
 */
export default function _default(language: string, morphologyData: any): Function;
