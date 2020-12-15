/**
 * Class for tokenizing a (html) text into sentences.
 */
export default class SentenceTokenizer {
  /**
     * Returns whether or not a certain character is a number.
     *
     * @param {string} character The character to check.
     * @returns {boolean} Whether or not the character is a capital letter.
     */
  isNumber(character: string): boolean;
  /**
     * Returns whether or not a given HTML tag is a break tag.
     *
     * @param {string} htmlTag The HTML tag to check.
     * @returns {boolean} Whether or not the given HTML tag is a break tag.
     */
  isBreakTag(htmlTag: string): boolean;
  /**
     * Returns whether or not a given character is quotation mark.
     *
     * @param {string} character The character to check.
     * @returns {boolean} Whether or not the given character is a quotation mark.
     */
  isQuotation(character: string): boolean;
  /**
     * Returns whether or not a given character is a punctuation mark that can be at the beginning
     * of a sentence, like ¿ and ¡ used in Spanish.
     *
     * @param {string} character The character to check.
     * @returns {boolean} Whether or not the given character is a punctuation mark.
     */
  isPunctuation(character: string): boolean;
  /**
     * Removes duplicate whitespace from a given text.
     *
     * @param {string} text The text with duplicate whitespace.
     * @returns {string} The text without duplicate whitespace.
     */
  removeDuplicateWhitespace(text: string): string;
  /**
     * Returns whether or not a certain character is a capital letter.
     *
     * @param {string} character The character to check.
     * @returns {boolean} Whether or not the character is a capital letter.
     */
  isCapitalLetter(character: string): boolean;
  /**
     * Checks whether the given character is a smaller than sign.
     *
     * This function is used to make sure that tokenizing the content after
     * the smaller than sign works as expected.
     * E.g. 'A sentence. < Hello world!' = ['A sentence.', '< Hello world!'].
     *
     * @param {string} character The character to check.
     * @returns {boolean} Whether the character is a smaller than sign ('<') or not.
     */
  isSmallerThanSign(character: string): boolean;
  /**
     * Retrieves the next two characters from an array with the two next tokens.
     *
     * @param {Array} nextTokens The two next tokens. Might be undefined.
     * @returns {string} The next two characters.
     */
  getNextTwoCharacters(nextTokens: any[]): string;
  /**
     * Checks whether a character is from a language that's written from right to left.
     * These languages don't have capital letter forms. Therefore any letter from these languages is a
     * potential sentence beginning.
     *
     * @param {string} letter The letter to check.
     *
     * @returns {boolean} Whether the letter is from an LTR language.
     */
  isLetterfromRTLLanguage(letter: string): boolean;
  /**
     * Checks if the sentenceBeginning beginning is a valid beginning.
     *
     * @param {string} sentenceBeginning The beginning of the sentence to validate.
     * @returns {boolean} Returns true if it is a valid beginning, false if it is not.
     */
  isValidSentenceBeginning(sentenceBeginning: string): boolean;
  /**
     * Checks if the token is a valid sentence start.
     *
     * @param {Object} token The token to validate.
     * @returns {boolean} Returns true if the token is valid sentence start, false if it is not.
     */
  isSentenceStart(token: any): boolean;
  /**
     * Checks if the token is a valid sentence ending. A valid sentence ending is either a full stop or another
     * delimiter such as "?", "!", etc.
     *
     * @param {Object} token The token to validate.
     * @returns {boolean} Returns true if the token is valid sentence ending, false if it is not.
     */
  isSentenceEnding(token: any): boolean;
  /**
     * Tokens that represent a '<', followed by content until it enters another '<' or '>'
     * gets another pass by the tokenizer.
     *
     * @param {Object} token A token of type 'smaller-than-sign-content'.
     * @param {string[]} tokenSentences The current array of found sentences. Sentences may get added by this method.
     * @param {string} currentSentence The current sentence. Sentence parts may get appended by this method.
     * @returns {{tokenSentences, currentSentence}} The found sentences and the current sentence, appended when necessary.
     */
  tokenizeSmallerThanContent(token: any, tokenSentences: string[], currentSentence: string): {
        tokenSentences;
        currentSentence;
    };
    /**
     * Creates a tokenizer.
     *
     * @returns {Object} The tokenizer and the tokens.
     */
  createTokenizer(): any;
  /**
     * Tokenizes the given text using the given tokenizer.
     *
     * @param {Object} tokenizer The tokenizer to use.
     * @param {string} text The text to tokenize.
     * @returns {void}
     */
  tokenize(tokenizer: any, text: string): void;
  /**
     * Returns an array of sentences for a given array of tokens, assumes that the text has already been split into blocks.
     *
     * @param {Object[]} tokenArray The tokens from the sentence tokenizer.
     * @param {boolean} [trimSentences=true] Whether to trim the sentences at the end or not.
     *
     * @returns {string[]} A list of sentences.
     */
  getSentencesFromTokens(tokenArray: any[], trimSentences?: boolean): string[];
}
