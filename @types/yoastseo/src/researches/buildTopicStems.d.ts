/**
 * Analyzes the focus keyword string or one synonym phrase.
 * Checks if morphology is requested or if the user wants to match exact string.
 * If morphology is required the module finds a stem for all words (if no function words list available) or
 * for all content words (i.e., excluding prepositions, articles, conjunctions, if the function words list is available).
 *
 * @param {string} keyphrase The keyphrase of the paper (or a synonym phrase) to get stem for.
 * @param {string} language The language to use for morphological analyzer and for function words.
 * @param {Object} morphologyData The available morphology data per language (false if unavailable).
 *
 * @returns {TopicPhrase} Object with an array of StemOriginalPairs of all (content) words in the keyphrase or synonym
 * phrase and information about whether the keyphrase/synonym should be matched exactly.
 */
export function buildStems(keyphrase: string, language: string, morphologyData: any): TopicPhrase;
/**
 * Retrieves stems of words of the keyphrase and of each synonym phrase using the function that caches
 * the results of previous calls of this function.
 *
 * @param {string} keyphrase The paper's keyphrase.
 * @param {string} synonyms The paper's synonyms.
 * @param {string} language The paper's language.
 * @param {Object} morphologyData The available morphology data to be used by the getStems function (language specific).
 *
 * @returns {Object} Object with an array of stems of words in the keyphrase and an array of arrays of stems of words in the synonyms.
 */
export function collectStems(keyphrase: string, synonyms: string, language: string, morphologyData: any): any;
/**
 * A topic phrase (i.e., a keyphrase or synonym) with stem-original pairs for the words in the topic phrase.
 *
 * @param {StemOriginalPair[]} stemOriginalPairs   The stem-original pairs for the words in the topic phrase.
 * @param {boolean}            exactMatch          Whether the topic phrase is an exact match.
 *
 * @constructor
 */
export function TopicPhrase(stemOriginalPairs?: StemOriginalPair[], exactMatch?: boolean): void;
export class TopicPhrase {
  /**
     * A topic phrase (i.e., a keyphrase or synonym) with stem-original pairs for the words in the topic phrase.
     *
     * @param {StemOriginalPair[]} stemOriginalPairs   The stem-original pairs for the words in the topic phrase.
     * @param {boolean}            exactMatch          Whether the topic phrase is an exact match.
     *
     * @constructor
     */
  constructor(stemOriginalPairs?: StemOriginalPair[], exactMatch?: boolean);
    stemOriginalPairs: StemOriginalPair[];
    exactMatch: boolean;
    getStems(): string[] | [];
}
/**
 * A stem-original pair ƒor a word in a topic phrase.
 *
 * @param {string}  stem        The stem of the topic phrase word.
 * @param {string}  original    The original word form the topic phrase (unsanitized)
 *
 * @constructor
 */
export function StemOriginalPair(stem: string, original: string): void;
export class StemOriginalPair {
  /**
     * A stem-original pair ƒor a word in a topic phrase.
     *
     * @param {string}  stem        The stem of the topic phrase word.
     * @param {string}  original    The original word form the topic phrase (unsanitized)
     *
     * @constructor
     */
  constructor(stem: string, original: string);
    stem: string;
    original: string;
}
