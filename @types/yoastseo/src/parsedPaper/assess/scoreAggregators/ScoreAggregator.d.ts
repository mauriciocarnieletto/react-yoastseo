export default ScoreAggregator;
/**
 * Aggregates assessment results into a single score.
 *
 * @memberOf module:parsedPaper/assess
 *
 * @abstract
 */
declare class ScoreAggregator {
  /**
     * Aggregates the given assessment results into a single score.
     *
     * @param {AssessmentResult[]} results The assessment results.
     *
     * @returns {number} The aggregated score.
     *
     * @abstract
     */
  aggregate(results: any[]): number;
}
