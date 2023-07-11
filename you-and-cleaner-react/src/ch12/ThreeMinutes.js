import { useEffect, useState } from "react";

const initialSeconds = 60 * 3;

const ThreeMinutes = () => {
  const [leftSeconds, setLeftSeconds] = useState(initialSeconds);

  useEffect(() => {
    const id = setInterval(() => {
      setLeftSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>{leftSeconds}</h1>
      {leftSeconds > 0 ? (
        <span>You are fixing ramen...</span>
      ) : (
        <span>Finish!!!</span>
      )}
    </div>
  );
};
