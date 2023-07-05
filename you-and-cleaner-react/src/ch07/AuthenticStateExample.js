import { useState } from "react";

initialCakes = [
  { title: "ショートケーキ", id: 0 },
  { title: "フルーツケーキ", id: 1 },
  { title: "チョコレートケーキ", id: 2 },
];

const AuthenticStateExample = () => {
  const [cakes, setCakes] = useState(initialCakes);
  const [selectedCakeId, setSelectedCakeId] = useState();
  const selectedCake = cakes.find((cake) => cake.id === selectedCakeId);

  return (
    <>
      <ul>
        {cakes.map((cake) => {
          <li key={cake.id}>
            {cake.title}
            <button onClick={() => setSelectedCakeId(cake.id)}>
              Select this cake!
            </button>
          </li>;
        })}
      </ul>
      {selectedCake && <p>{selectedCake.title}</p>}
    </>
  );
};
