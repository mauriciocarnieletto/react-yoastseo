// import { useEffect, useState } from "react";
// import { AnalyzeResult, Paper } from "yoastseo";

// import { useAnalysisWorkerWrapper } from "./use-analysis-worker-wrapper";

// export function useYoastAnalisys(workerWrapper: Workepaper: Paper): AnalyzeResult {
//   const [initialized, analize] = useAnalysisWorkerWrapper();

//   const [analisys, setAnalisys] = useState<AnalyzeResult>({});

//   useEffect(() => {
//     if (initialized) {
//       analize(paper)
//         .then(setAnalisys);
//     }
//   }, [paper, initialized, analize, setAnalisys]);

//   return analisys;
// }


// // const analyse: Analyse = async (paper: Paper) => {
// //   return wrapper.analyze(paper);
// // };

// // const analize = useMemo(() => analyse, [wrapper]);
