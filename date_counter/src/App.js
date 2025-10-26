import { useState } from "react";
import "./style.css";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("october 26 2025");
  date.setDate(date.getDate() + count);
  // console.log(date);
  const increaseCount = () => {
    setCount((count) => count + step);
  };

  const decreaseCount = () => {
    setCount((count) => count - step);
  };

  const increaseStep = () => {
    setStep((step) => step + 1);
  };

  const decreaseStep = () => {
    if (step > 1) setStep((step) => step - 1);
  };

  return (
    <div>
      <div style={{ padding: "7px" }}>
        <button onClick={decreaseStep}>➖</button>
        <span style={{ padding: "7px" }}>Step: {step}</span>
        <button onClick={increaseStep}>➕</button>
      </div>
      <div style={{ padding: "7px" }}>
        <button onClick={decreaseCount}>➖</button>
        <span style={{ padding: "7px" }}>Count: {count}</span>
        <button onClick={increaseCount}>➕</button>
      </div>

      <p>
        <span>
          {count == 0?<span>Today is </span>:
          count > 0?<span>{count} day from today will be </span>:
          <span>{Math.abs(count)} day from today was </span>} {date.toDateString()}.
        </span>
      </p>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export default App;
