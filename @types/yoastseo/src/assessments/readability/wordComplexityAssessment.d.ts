declare namespace _default {
    export const identifier: string;
    export { wordComplexityAssessment as getResult };
    export { isApplicable };
    export { wordComplexityMarker as getMarks };
}
export default _default;
/**
 * Execute the word complexity assessment and return a result based on the syllables in words
 * @param {Paper} paper The Paper object to assess.
 * @param {Researcher} researcher The Researcher object containing all available researches.
 * @param {object} i18n The object used for translations
 * @returns {AssessmentResult} The result of the assessment, containing both a score and a descriptive text.
 */
declare function wordComplexityAssessment(paper: any, researcher: any, i18n: object): AssessmentResult;
/**
 * Checks whether the paper has text.
 *
 * @param {Paper} paper The paper to use for the assessment.
 *
 * @returns {boolean} True when there is text.
 */
declare function isApplicable(paper: any): boolean;
/**
 * Creates markers of words that are complex.
 *
 * @param {Paper} paper The Paper object to assess.
 * @param {Researcher} researcher The Researcher object containing all available researches.
 * @returns {Array} A list with markers
 */
declare function wordComplexityMarker(paper: any, researcher: any): any[];
import AssessmentResult from "../../values/AssessmentResult";
