import React, { useState } from "react";
import css from "./styles.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={css.counter_container}>
      <button
        disabled={count > 9}
        className={css.button}
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <p className={css.counter}>{count}</p>
      <button
        disabled={count < 1}
        className={css.button}
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
