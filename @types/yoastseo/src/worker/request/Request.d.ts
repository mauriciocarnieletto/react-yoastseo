/**
 * Request serves as helper for the AnalysisWorkerWrapper.
 *
 * It holds the resolve and reject functions that it needs to fulfill the
 * promise. Any optional data will get included in the Result it can generate.
 */
export default class Request {
  /**
     * Initializes a request.
     *
     * @param {Function} resolve The resolve function.
     * @param {Function} reject  The reject function.
     * @param {Object}  [data]   Optional extra data.
     */
  constructor(resolve: Function, reject: Function, data?: any);
    _resolve: Function;
    _reject: Function;
    _data: any;
    /**
     * Resolves the request with a result.
     *
     * @param {Object} [payload] Optional payload.
     *
     * @returns {void}
     */
    resolve(payload?: any): void;
    /**
     * Rejects the request with a result.
     *
     * @param {Object} [payload] Optional payload.
     *
     * @returns {void}
     */
    reject(payload?: any): void;
}
