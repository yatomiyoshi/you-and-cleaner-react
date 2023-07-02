import { useTimer } from "./useTimer";

export const ThreeMinutesTimer = () => {
  const count = useTimer(60 * 3);

  return (
    <>
      <h1>{count}</h1>
      {count > 0 ? (
        <span>You are fixing ramen...</span>
      ) : (
        <span>Up, up and away!</span>
      )}
    </>
  );
};
