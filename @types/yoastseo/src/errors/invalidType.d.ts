export default InvalidTypeError;
/**
 * Throws an invalid type error
 *
 * @param {string} message The message to show when the error is thrown
 *
 * @returns {void}
 */
declare function InvalidTypeError(message: string): void;
declare class InvalidTypeError {
  /**
     * Throws an invalid type error
     *
     * @param {string} message The message to show when the error is thrown
     *
     * @returns {void}
     */
  constructor(message: string);
    name: string;
    message: string;
}
