import { useState } from "react";
import { v4 as uuid } from "uuid";

const rightCakes = [
  { title: "ショートケーキ", id: uuid() },
  { title: "フルーツケーキ", id: uuid() },
  { title: "チョコケーキ", id: uuid() },
];

export const ComparingBetweenInsideAndOutsideExample = () => {
  const [input, setInput] = useState("");
  const wrongCakes = [
    { title: "ショートケーキ", id: uuid() },
    { title: "フルーツケーキ", id: uuid() },
    { title: "チョコケーキ", id: uuid() },
  ];

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <h1>Wrong Key</h1>
      {/* cake => {} と波括弧で囲むと出力されないので注意 */}
      <ul>
        {wrongCakes.map((cake) => (
          <li key={cake.id}>{cake.id}</li>
        ))}
      </ul>
      <h1>Right Key</h1>
      <ul>
        {rightCakes.map((cake) => (
          <li key={cake.id}>{cake.id}</li>
        ))}
      </ul>
    </div>
  );
};
