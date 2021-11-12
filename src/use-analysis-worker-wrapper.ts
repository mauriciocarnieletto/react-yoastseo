import { useMemo } from "react";
import { AnalysisWebWorker, AnalysisWorkerWrapper } from "yoastseo";

export function useAnalysisWorkerWrapper(
  worker: AnalysisWebWorker
): AnalysisWorkerWrapper {
  return useMemo(() => new AnalysisWorkerWrapper(worker), [worker]);
}
