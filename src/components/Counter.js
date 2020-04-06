import React from "react";

const Counter = ({ number, onIncrease, onDecrease, onIncrease5 }) => {
  console.log(onIncrease);
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onIncrease5}>+5</button>
      </div>
    </div>
  );
};
export default Counter;
