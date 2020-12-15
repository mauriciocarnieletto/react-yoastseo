declare namespace _default {
    export const identifier: string;
    export { textPresenceAssessment as getResult };
}
export default _default;
/**
 * Assesses that the paper has at least a little bit of content.
 *
 * @param {Paper} paper The paper to assess.
 * @param {Researcher} researcher The researcher.
 * @param {Jed} i18n The translations object.
 * @returns {AssessmentResult} The result of this assessment.
 */
declare function textPresenceAssessment(paper: any, researcher: any, i18n: any): AssessmentResult;
import AssessmentResult from "../../values/AssessmentResult";
