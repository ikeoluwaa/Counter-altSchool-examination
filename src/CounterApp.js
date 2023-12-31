import { useState } from "react";
import { useCounter } from "./useCounter";
import { IoAdd } from "react-icons/io5";
import { LiaMinusSolid } from "react-icons/lia";

function CounterApp() {
  const { count, increment, decrement, reset, setValue } = useCounter();
  const [inputValue, setInputValue] = useState("");

  const handleSetValue = () => {
    const parsedValue = Number(inputValue);
    if (!isNaN(parsedValue)) {
      setValue(parsedValue);
      setInputValue("");
    }
  };

  const handleReset = () => {
    reset();
    setInputValue("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSetValue();
    }
  };

  return (
    <div className="container">
      <div className="counter-container">
        <h1>{count}</h1>
        <div className="input-container">
          <button className="buttons reset" onClick={handleReset}>
            Reset
          </button>
          <button className="buttons increment" onClick={increment}>
            <IoAdd />
          </button>
          <button className="buttons decrement" onClick={decrement}>
            <LiaMinusSolid />
          </button>
        </div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
          placeholder="Enter a number"
        />
        <button className="set-value" onClick={handleSetValue}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
