import Mark from "./Mark";

export default AssessmentResult;

declare class AssessmentResult {
  hasScore: () => boolean;
  getScore: () => number;
  hasText: () => boolean;
  getText: () => string;
  hasMarks: () => boolean;
  getMarks: () => Mark[];
  getIdentifier: () => string;
}

declare namespace AssessmentResult {
  function parse(serialized: any): AssessmentResult;
}
