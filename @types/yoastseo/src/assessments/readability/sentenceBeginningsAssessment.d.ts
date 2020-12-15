declare namespace _default {
    export const identifier: string;
    export { sentenceBeginningsAssessment as getResult };
    export { isApplicable };
    export { sentenceBeginningMarker as getMarks };
}
export default _default;
/**
 * Scores the repetition of sentence beginnings in consecutive sentences.
 * @param {object} paper The paper to use for the assessment.
 * @param {object} researcher The researcher used for calling research.
 * @param {object} i18n The object used for translations.
 * @returns {object} The Assessment result
 */
declare function sentenceBeginningsAssessment(paper: object, researcher: object, i18n: object): object;
/**
 * Checks if the sentence beginnings assessment is applicable to the paper.
 *
 * @param {Object} paper The paper to check.
 *
 * @returns {boolean} Returns true if the language is available and the paper is not empty.
 */
declare function isApplicable(paper: any): boolean;
/**
 * Marks all consecutive sentences with the same beginnings.
 * @param {object} paper The paper to use for the assessment.
 * @param {object} researcher The researcher used for calling research.
 * @returns {object} All marked sentences.
 */
declare function sentenceBeginningMarker(paper: object, researcher: object): object;
