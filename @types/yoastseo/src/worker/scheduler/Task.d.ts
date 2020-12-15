/**
 * Represents a scheduler task.
 */
export default class Task {
  /**
     * Initializes a task.
     *
     * @param {number}   id      The task identifier.
     * @param {Function} execute Executes the job with the data.
     * @param {Function} done    Callback for the scheduler.
     * @param {Object}   [data]  Optional data for when executing the task.
     * @param {string}   type    The type of the task (analyze, analyzeRelatedKeywords, loadScript or customMessage)
     */
  constructor(id: number, execute: Function, done: Function, data?: any, type?: string);
    id: number;
    execute: Function;
    done: Function;
    data: any;
    type: string;
}
