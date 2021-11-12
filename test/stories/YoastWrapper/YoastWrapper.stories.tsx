import { useEffect, useState } from "react";
import { AnalysisWorkerWrapper, createWorker, Paper } from "yoastseo";
import { withKnobs, text } from "@storybook/addon-knobs";
import React from "react";


const url = "/yoast-worker.js";

function useWorker() {
  const [worker, setWorker] = useState<AnalysisWorkerWrapper | null>(null);

  useEffect(() => {
    const workerWrapper = new AnalysisWorkerWrapper(createWorker(url));

    workerWrapper.initialize({
      locale: "pt_BR",
      contentAnalysisActive: true,
      keywordAnalysisActive: true,
      logLevel: "ERROR",
    }).then(() => {

      setWorker(workerWrapper);

    });
  }, []);

  return worker;
}

function useYoastSeo() {

  const worker = useWorker();

  return worker;
}


export default {
  title: "Components/Button",
  decorators: [withKnobs],
};


type AnalysisResult = {
  data: any,
  result: {
    seo: {
      "": {
        score: number;
        results: {
          score: number;
          text: string;
          _identifier: string;
        }[];
      }
    };
    readability: {
      score: number;
      results: { score: number; text: string; _identifier: string; }[]
    },
  }
};

export const Primary = () => {
  const yoast = useYoastSeo();

  const keyword = text("Keyword", "My awesome keyword");
  const content = text("Content", "My awesome content");
  const title = text("Title", "My awesome content");
  const description = text("Description", "My awesome content");
  const url = text("Url", "https://yoast.com");
  const [analysis, setAnalysis] = useState<AnalysisResult>();

  useEffect(() => {
    if (yoast) {
      (async () => {
        try {

          const result = await yoast.analyze(new Paper(content, {
            keyword,
            title,
            description,
            url,
            locale: "pt_BR",
          }));

          console.log(result);

          setAnalysis(result);

        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [keyword, content, description, title, url]);


  return <div>
    <h1>SEO {analysis?.result?.seo[""].score}</h1>
    {
      analysis?.result?.seo[""].results.map((result,) => {
        return <p key={result._identifier}>{result._identifier} {result.score } - <span dangerouslySetInnerHTML={{__html: result.text}} /></p>;
      })
    }
    <h1>Readbility {analysis?.result?.readability.score}</h1>
    {
      analysis?.result?.readability.results.map((result,) => {
        return <p key={result._identifier}>{result._identifier} {result.score } - <span dangerouslySetInnerHTML={{__html: result.text}} /></p>;
      })
    }
  </div>;
};
