export default WordCombination;
/**
 * Represents a word combination in the context of relevant words.
 *
 * @constructor
 *
 * @param {string[]} words The list of words that this combination consists of.
 * @param {number} [occurrences] The number of occurrences, defaults to 0.
 * @param {Function} functionWords The function containing the lists of function words.
 */
declare function WordCombination(words: string[], occurrences?: number, functionWords?: Function): void;
declare class WordCombination {
  /**
     * Represents a word combination in the context of relevant words.
     *
     * @constructor
     *
     * @param {string[]} words The list of words that this combination consists of.
     * @param {number} [occurrences] The number of occurrences, defaults to 0.
     * @param {Function} functionWords The function containing the lists of function words.
     */
  constructor(words: string[], occurrences?: number, functionWords?: Function);
    _words: string[];
    _length: number;
    _occurrences: number;
    _functionWords: Function;
    getLengthBonus(): number;
    getWords(): any[];
    getLength(): number;
    getCombination(): string;
    getOccurrences(): number;
    incrementOccurrences(): void;
    getMultiplier(relevantWordPercentage: number): number;
    isRelevantWord(word: string): boolean;
    getRelevantWordPercentage(): number;
    getRelevance(): number;
    setRelevantWords(relevantWords: any): void;
    _relevantWords: any;
    getDensity(wordCount: number): number;
    serialize(): any;
}
declare namespace WordCombination {
    const lengthBonus: {
        2: number;
        3: number;
        4: number;
        5: number;
    };
    function parse(serialized: any): WordCombination;
}
