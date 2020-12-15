export default AnalysisWebWorker;

/**
 * Analysis Web Worker.
 *
 * Worker API:     https://developer.mozilla.org/en-US/docs/Web/API/Worker
 * Webpack loader: https://github.com/webpack-contrib/worker-loader
 */
declare class AnalysisWebWorker extends Worker {
  /**
	 * Initializes the AnalysisWebWorker class.
	 *
	 * @param {Object} scope The scope for the messaging. Expected to have the
	 *                       `onmessage` event and the `postMessage` function.
	 */
  constructor(context: typeof globalThis);
  /**
	 * Registers this web worker with the scope passed to it's constructor.
	 *
	 * @returns {void}
	 */
  public register(): void;
}
