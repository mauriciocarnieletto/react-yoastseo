declare namespace _default {
    export const identifier: string;
    export { isApplicable };
    export { urlHasStopWordsAssessment as getResult };
}
export default _default;
/**
 * Checks if there is a list of stopwords for the language of the paper.
 *
 * @param {Object} paper The paper to check.
 *
 * @returns {boolean} Returns true if the language is available.
 */
declare function isApplicable(paper: any): boolean;
/**
 * Execute the Assessment and return a result.
 *
 * @param {Paper} paper The Paper object to assess.
 * @param {Researcher} researcher The Researcher object containing all available researches.
 * @param {Jed} i18n The locale object.
 *
 * @returns {AssessmentResult} The result of the assessment, containing both a score and a descriptive text.
 *
 * @deprecated since 1.48. We have removed it from the assessments since we do not consider it an important SEO factor anymore.
 */
declare function urlHasStopWordsAssessment(paper: any, researcher: any, i18n: any): AssessmentResult;
import AssessmentResult from "../../values/AssessmentResult";
