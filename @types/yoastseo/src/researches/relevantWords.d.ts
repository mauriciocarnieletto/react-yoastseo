export default relevantWords;
/**
 * Retrieves the relevant words from the given paper.
 *
 * @param {Paper} paper The paper to determine the relevant words of.
 *
 * @returns {Object}            result                     A compound result object.
 * @returns {WordCombination[]} result.prominentWords      Relevant words for this paper, filtered and sorted.
 * @returns {boolean}           result.hasMetaDescription  Whether the metadescription is available in the input paper.
 * @returns {boolean}           result.hasTitle            Whether the title is available in the input paper.
 */
declare function relevantWords(paper: any): any;
