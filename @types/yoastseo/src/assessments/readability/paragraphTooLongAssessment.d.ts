declare namespace _default {
    export const identifier: string;
    export { paragraphLengthAssessment as getResult };
    export { isApplicable };
    export { paragraphLengthMarker as getMarks };
}
export default _default;
/**
 * Runs the getParagraphLength module, based on this returns an assessment result with score and text.
 * @param {object} paper The paper to use for the assessment.
 * @param {object} researcher The researcher used for calling research.
 * @param {object} i18n The object used for translations.
 * @returns {object} the Assessmentresult
 */
declare function paragraphLengthAssessment(paper: object, researcher: object, i18n: object): object;
/**
 * Checks if the paragraphTooLong assessment is applicable to the paper.
 *
 * @param {Paper} paper The paper to check.
 *
 * @returns {boolean} Returns true if the assessment is applicable to the paper.
 */
declare function isApplicable(paper: any): boolean;
/**
 * Creates a marker for the paragraphs.
 *
 * @param {object} paper The paper to use for the assessment.
 * @param {object} researcher The researcher used for calling research.
 * @returns {Array} An array with marked paragraphs.
 */
declare function paragraphLengthMarker(paper: object, researcher: object): any[];
