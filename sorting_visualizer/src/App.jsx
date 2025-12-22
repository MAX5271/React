import {  useState } from "react";

function App() {

  const size = 10;

  const [arr,setArr] = useState(Array.from({length:size},()=>Math.floor(Math.random()*100)));

  function genArray(){
    const newArr = arr.map(()=>Math.floor(Math.random()*100));
    setArr(newArr);
  }
  console.log(arr);
  return (
    <div>
      <button onClick={genArray}>Generate Array</button>
    </div>
  )
}

export default App