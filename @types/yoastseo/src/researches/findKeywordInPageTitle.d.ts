/**
 * Counts the occurrences of the keyword in the page title. Returns the result that contains information on
 * (1) whether the exact match of the keyphrase was used in the title,
 * (2) whether all (content) words from the keyphrase were found in the title,
 * (3) at which position the exact match was found in the title.
 *
 * @param {Object} paper The paper containing title and keyword.
 * @param {Researcher} researcher The researcher to use for analysis.
 *
 * @returns {Object} result with the information on whether the keyphrase was matched in the title and how.
 */
export default function _default(paper: any, researcher: any): any;
