import { useState } from "react";
const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter using useState</h1>
      <p>Count = {count}</p>

      <button onClick={increment} disabled={count === 10}>
        increment +
      </button>

      <button onClick={decrement} disabled={count === 0}>
        decrement -
      </button>
    </div>
  );
};

export default UseStateCounter;
