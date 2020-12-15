import React from "react";

import { HookResult, renderHook } from "@testing-library/react-hooks";
import { useCreateWorker } from "@/use-create-worker";

jest.mock("yoastseo");

beforeEach(() => {
  jest.clearAllMocks();
});

const feature = loadFeature("CreateWorker");

defineFeature(feature, (test) => {
  test("Using a valid URL", ({ given, when, then }) => {
    let url: string;
    let result: HookResult<ReturnType<typeof useCreateWorker>>;

    const worker = { id: 1 };
    const useMemo = jest.spyOn(React, "useMemo").mockReturnValue(worker);

    given("I have a valid JS file hosted in the same server", () => {
      url = "valid-url.js";
    });

    when("I create a worker", () => {
      result = renderHook(() => useCreateWorker(url)).result;
    });

    then("I should receive a worker instance", () => {
      expect(result.current).toBe(worker);
    });

    then("the return should be memoized", () => {
      expect(useMemo).toHaveBeenCalledTimes(1);
      expect(useMemo).toHaveBeenCalledWith(expect.any(Function), [url]);
    });
  });
});
