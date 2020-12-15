declare namespace _default {
    export const identifier: string;
    export { sentenceLengthInDescriptionAssessment as getResult };
    export { isApplicable };
}
export default _default;
/**
 * Scores the percentage of sentences including more than the recommended number of words.
 *
 * @param {object} paper The paper to use for the assessment.
 * @param {object} researcher The researcher used for calling research.
 * @param {object} i18n The object used for translations.
 * @returns {object} The Assessmentresult
 */
declare function sentenceLengthInDescriptionAssessment(paper: object, researcher: object, i18n: object): object;
/**
 * Checks if the paper has a metadescription, which is a prerequisite for the assessment to be applicable to the paper.
 *
 * @param {Object} paper The paper to check.
 *
 * @returns {boolean} Returns true if the paper has a meta description.
 */
declare function isApplicable(paper: any): boolean;
