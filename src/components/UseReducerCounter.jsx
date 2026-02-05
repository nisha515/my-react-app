import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state < 10 ? state + 1 : state;
    case "DEC":
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
};
const UseReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter using useReducer</h1>
      <p>Count = {count}</p>

      <button
        onClick={() => dispatch({ type: "INC" })}
        disabled={count === 10}
      >
        increment +
      </button>

      <button
        onClick={() => dispatch({ type: "DEC" })}
        disabled={count === 0}
      >
        decrement -
      </button>
    </div>
  );
};

export default UseReducerCounter;
