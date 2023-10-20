import { useState } from "react";
import { useCounter } from "./useCounter";
import { IoAdd } from "react-icons/io5";
import { LiaMinusSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

function CounterApp() {
  const { count, increment, decrement, reset, setValue } = useCounter();
  const [newValue, setNewValue] = useState(0); // State to store the new value

  const handleSetValue = () => {
    const parsedValue = Number(newValue);
    if (!isNaN(parsedValue)) {
      setValue(parsedValue);
      setNewValue("");
    }
  };

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <div className=" input-container">
          <button className=" buttons increment" onClick={increment}>
            <IoAdd />
          </button>

          <button className="reset" onClick={reset}>
            Reset
          </button>

          <input
            type="number"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button className="set-value" onClick={handleSetValue}>
            SetValue
          </button>
          <button className=" buttons decrement" onClick={decrement}>
            <LiaMinusSolid />
          </button>
        </div>
      </div>
    </>
  );
}
export default CounterApp;
