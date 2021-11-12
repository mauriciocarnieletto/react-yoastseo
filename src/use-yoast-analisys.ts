import { useEffect, useState } from "react";
import { Paper } from "yoastseo";
import { useCreateWorker } from ".";

import { useAnalysisWorkerWrapper } from "./use-analysis-worker-wrapper";

export function useYoastAnalisys(workerWrapper: Paper) {
  const { analyze, initialize } = useAnalysisWorkerWrapper(
    useCreateWorker(`yoast-analysis-worker`)
  );

  const [analisys, setAnalisys] = useState<any>({});

  useEffect(() => {
    if (initialize) {
      async () => {
        const result = await analyze(workerWrapper);
        setAnalisys(result);
      };
    }
  }, [workerWrapper, initialize, analyze, setAnalisys]);

  return analisys;
}

// const analyse: Analyse = async (paper: Paper) => {
//   return wrapper.analyze(paper);
// };

// const analize = useMemo(() => analyse, [wrapper]);
