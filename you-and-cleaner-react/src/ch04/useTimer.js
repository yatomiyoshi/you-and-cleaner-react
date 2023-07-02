import { useEffect, useState } from "react";

// カスタムフックとして、変数countを用意
// countがどのように更新されるかを定義
// countを利用する側は、その更新方法については関与しない
// 定義されたcountを利用するのみ
export const useTimer = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return count;
};
