declare namespace _default {
    export const identifier: string;
    export { transitionWordsAssessment as getResult };
    export { isApplicable };
    export { transitionWordsMarker as getMarks };
}
export default _default;
/**
 * Scores the percentage of sentences including one or more transition words.
 * @param {object} paper The paper to use for the assessment.
 * @param {object} researcher The researcher used for calling research.
 * @param {object} i18n The object used for translations.
 * @returns {object} The Assessment result.
 */
declare function transitionWordsAssessment(paper: object, researcher: object, i18n: object): object;
/**
 * Checks if the transition words assessment is applicable to the paper.
 *
 * @param {Object} paper The paper to check.
 *
 * @returns {boolean} Returns true if the language is available and the paper is not empty.
 */
declare function isApplicable(paper: any): boolean;
/**
 * Marks text for the transition words assessment.
 * @param {Paper} paper The paper to use for the marking.
 * @param {Researcher} researcher The researcher containing the necessary research.
 * @returns {Array<Mark>} A list of marks that should be applied.
 */
declare function transitionWordsMarker(paper: any, researcher: any): Array<Mark>;
import Mark from "../../values/Mark";
