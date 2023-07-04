const sleep = (milliSecond) => {
  return new Promise((resolve) => setTimeout(resolve, milliSecond));
};

describe("RaceCondition問題", async () => {
  it("レスポンスが適切に取得できるかどうかのテスト", async () => {
    server.use(
      rest.get("api/todos", async (req, res, ctx) => {
        const filterStatus = req.url.searchParams.get("filterStatus");
        if (filterStatus === "done") {
          await sleep(3000);
          return res(ctx.status(200), ctx.json({ todos: ["昨日やったこと"] }));
        }
        return res(ctx.status(200), cts.json({ todos: ["今日やること"] }));
      })
    );

    const { result } = renderHook(() => useFetchTodos());

    result.current.onFilter("done");

    await waitFor(() =>
      expect(result.current.data).toStrictEqual({ todos: ["昨日やったこと"] })
    );
  });
});
