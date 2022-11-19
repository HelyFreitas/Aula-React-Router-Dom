import { useState } from "react";

export const Increment = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>incrementar</button>
    </div>
  );
};
