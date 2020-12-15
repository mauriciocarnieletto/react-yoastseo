declare namespace _default {
    export const identifier: string;
    export { taxonomyTextLengthAssessment as getResult };
}
export default _default;
/**
 * Execute the Assessment and return a result.
 *
 * @param {Paper} paper The Paper object to assess.
 * @param {Researcher} researcher The Researcher object containing all available researches.
 * @param {Jed} i18n The locale object.
 *
 * @returns {AssessmentResult} The result of the assessment, containing both a score and a descriptive text.
 *
 * @deprecated since 1.48. Please use the TextLengthAssessment with different configuration parameters instead.
 */
declare function taxonomyTextLengthAssessment(paper: any, researcher: any, i18n: any): AssessmentResult;
import AssessmentResult from "../../values/AssessmentResult.js";
