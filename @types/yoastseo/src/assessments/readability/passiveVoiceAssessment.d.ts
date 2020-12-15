declare namespace _default {
    export const identifier: string;
    export { passiveVoiceAssessment as getResult };
    export { isApplicable };
    export { passiveVoiceMarker as getMarks };
}
export default _default;
/**
 * Runs the passiveVoice module, based on this returns an assessment result with score and text.
 * @param {object} paper The paper to use for the assessment.
 * @param {object} researcher The researcher used for calling research.
 * @param {object} i18n The object used for translations.
 * @returns {object} the Assessmentresult
 */
declare function passiveVoiceAssessment(paper: object, researcher: object, i18n: object): object;
/**
 * Checks if passive voice analysis is available for the language of the paper.
 *
 * @param {Object} paper The paper to check.
 *
 * @returns {boolean} Returns true if the language is available and the paper is not empty.
 */
declare function isApplicable(paper: any): boolean;
/**
 * Marks all sentences that have the passive voice.
 *
 * @param {object} paper The paper to use for the assessment.
 * @param {object} researcher The researcher used for calling research.
 * @returns {object} All marked sentences.
 */
declare function passiveVoiceMarker(paper: object, researcher: object): object;
