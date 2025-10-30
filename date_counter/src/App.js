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

  const resetAttributes = ()=>{
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <span>
        <input type="range" min={0} max={10} value={step} onChange={(e)=>setStep(Number(e.target.value))}/> Step:{step}
        </span>
      </div>
    <div>
    <span>
          <button onClick={decreaseCount}>-</button>
        <input value={count} onChange={(e)=>setCount(Number(e.target.value))}/>
        <button onClick={increaseCount}>+</button>
        </span>
    </div>
      <p>
        <span>
          {count == 0 ? (
            <span>Today is </span>
          ) : count > 0 ? (
            <span>{count} day from today will be </span>
          ) : (
            <span>{Math.abs(count)} day from today was </span>
          )}{" "}
          {date.toDateString()}.
        </span>
      </p>
      {step!=1||count!=0?<button onClick={resetAttributes}>Reset</button>:null}
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
