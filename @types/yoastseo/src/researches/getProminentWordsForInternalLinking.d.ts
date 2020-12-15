export default getProminentWordsForInternalLinking;
/**
 * Retrieves the prominent words from the given paper.
 *
 * @param {Paper}       paper       The paper to determine the prominent words of.
 * @param {Researcher}  researcher  The researcher to use for analysis.
 *
 * @returns {Object}          result                    A compound result object.
 * @returns {ProminentWord[]} result.prominentWords     Prominent words for this paper, filtered and sorted.
 * @returns {boolean}         result.hasMetaDescription Whether the metadescription is available in the input paper.
 * @returns {boolean}         result.hasTitle           Whether the title is available in the input paper.
 */
declare function getProminentWordsForInternalLinking(paper: any, researcher: any): any;
