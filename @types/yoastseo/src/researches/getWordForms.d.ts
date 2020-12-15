export default getWordForms;
/**
 * Gets all matching word forms for the stems of the keyphrase and synonyms. Stems are either colleced from
 * the paper or, for specific languages, directly created.
 *
 * @param {Paper}       paper       The paper to build keyphrase and synonym forms for.
 * @param {Researcher}  researcher  The researcher.
 *
 * @returns {Object} Object with an array of keyphrase forms and an array of arrays of synonyms forms, based on the forms
 * found in the text or created forms.
 */
declare function getWordForms(paper: any, researcher: any): any;
