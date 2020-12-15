export default MissingArgumentError;
/**
 * Error that means that an argument should be passed that wasn't passed.
 *
 * @constructor
 *
 * @param {string} message The message for this error.
 *
 * @returns {void}
 */
declare function MissingArgumentError(message: string): void;
declare class MissingArgumentError {
  /**
     * Error that means that an argument should be passed that wasn't passed.
     *
     * @constructor
     *
     * @param {string} message The message for this error.
     *
     * @returns {void}
     */
  constructor(message: string);
    name: string;
    message: string;
}
