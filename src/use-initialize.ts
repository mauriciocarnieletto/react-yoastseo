import { useEffect, useMemo, useState } from "react";
import { AnalysisWorkerWrapper } from "yoastseo/src/worker";

type Initialize = AnalysisWorkerWrapper["initialize"];

export function useInitialize(wrapper: AnalysisWorkerWrapper): [boolean, Initialize] {

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(false);
  }, [wrapper]);

  const initialize = useMemo(() => async (...config: Parameters<Initialize>) => {
    await wrapper.initialize(...config);
    setInitialized(true);
  }, [wrapper, setInitialized]);

  return [initialized, initialize];
}

// {
//   locale: "pt_BR",
//   contentAnalysisActive: true,
//   keywordAnalysisActive: true,
//   logLevel: "ERROR",
//   // translations: {
//   //   locale_data: {
//   //     "js-text-analysis": {
//   //       ""
//   //     }
//   //   }
//   // }
// }
