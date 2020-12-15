export default DeviationFragment;
/**
 * Represents a partial deviation when counting syllables
 *
 * @param {Object} options Extra options about how to match this fragment.
 * @param {string} options.location The location in the word where this deviation can occur.
 * @param {string} options.word The actual string that should be counted differently.
 * @param {number} options.syllables The amount of syllables this fragment has.
 * @param {string[]} [options.notFollowedBy] A list of characters that this fragment shouldn't be followed with.
 * @param {string[]} [options.alsoFollowedBy] A list of characters that this fragment could be followed with.
 *
 * @constructor
 */
declare function DeviationFragment(options: {
    location: string;
    word: string;
    syllables: number;
    notFollowedBy: string[];
    alsoFollowedBy: string[];
}): void;
declare class DeviationFragment {
  /**
     * Represents a partial deviation when counting syllables
     *
     * @param {Object} options Extra options about how to match this fragment.
     * @param {string} options.location The location in the word where this deviation can occur.
     * @param {string} options.word The actual string that should be counted differently.
     * @param {number} options.syllables The amount of syllables this fragment has.
     * @param {string[]} [options.notFollowedBy] A list of characters that this fragment shouldn't be followed with.
     * @param {string[]} [options.alsoFollowedBy] A list of characters that this fragment could be followed with.
     *
     * @constructor
     */
  constructor(options: {
        location: string;
        word: string;
        syllables: number;
        notFollowedBy: string[];
        alsoFollowedBy: string[];
    });
    _location: string;
    _fragment: string;
    _syllables: number;
    _regex: RegExp;
    _options: any;
    createRegex(): void;
    getRegex(): RegExp;
    occursIn(word: string): boolean;
    removeFrom(word: string): string;
    getSyllables(): number;
}
