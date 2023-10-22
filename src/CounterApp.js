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

  const handleInputChange = (event) => {
    const value = event.target.value;

    // Check if the input is a valid number
    if (/^\d*$/.test(value)) {
      setInputValue(value);
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
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
          placeholder="Enter a number (letters are not allowed)"
        />
        <button className="set-value" onClick={handleSetValue}>
          Enter
        </button>
        {isNaN(inputValue) && inputValue !== "" && (
          <p className="error-message">Please enter a valid number.</p>
        )}
      </div>
    </div>
  );
}

export default CounterApp;
