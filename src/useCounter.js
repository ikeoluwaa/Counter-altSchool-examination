import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  function setValue(value) {
    setCount(value);
  }

  return { count, increment, decrement, reset, setValue };
}
