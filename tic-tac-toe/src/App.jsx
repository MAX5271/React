import { useState } from "react";

function App() {
  const [turn, setTurn] = useState(1);
  const [arr, setArr] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);

  function findWinner() {
    for(let i=0;i<3;i++){
      if(arr[i][0]===arr[i][1]&&arr[i][2]===arr[i][1]&&arr[i][1]!=-1) return true;
    }
    for(let i=0;i<3;i++){
      if(arr[0][i]===arr[1][i]&&arr[2][i]===arr[0][i]&&arr[0][i]!=-1) return true;
    }
    if(arr[0][0]===arr[1][1]&&arr[2][2]===arr[0][0]&&arr[1][1]!=-1) return true;
    if(arr[2][0]===arr[1][1]&&arr[0][2]===arr[2][0]&&arr[1][1]!=-1) return true;
    return false;
  }

  function handleClick(r, c, t) {
    const newArr = arr.map((cr, i) => {
      const newAr = cr.map((el, j) => {
        if (i === r && j === c && arr[i][j] === -1 &&!findWinner()) {
          setTurn(turn===1?0:1);
          return t;
        }
        return el;
      });
      return newAr;
    });
    setArr(newArr);
  }

  function handleDraw(){
    var count = 0;
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        if(arr[i][j]===-1) count=count+1;
      }
    }
    if(count===0) return true;
    else return false;
  }

  function handleReset(){
    setArr([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);
  setTurn(1);
  }

  return (
    <div style={{padding:"20px"}}>
      <h1>{handleDraw()?"DRAW":findWinner()?`${turn===1?"⭕":"❌"} won`:turn == 1 ? "Player ❌ turn" : "Player ⭕ turn"}</h1>
      <div
        style={{
          height: "168px",
          width: "168px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          borderStyle: "solid",
          borderColor: "black"
        }}
      >
        {arr.map((ar, i) =>
          ar.map((num, j) => (
            <div
              key={j}
              style={{
                fontSize: "40px",
                color: "red",
                height: "50px",
                width: "50px",
                borderColor: "black",
                borderStyle: "solid",
              }}
              onClick={() => handleClick(i, j, turn)}
            >
              {num == 0 ? "⭕" : num == 1 ? "❌" : ""}
            </div>
          ))
        )}
      </div>
      <div style={{padding:"5px"}}></div>
      <button onClick={handleReset} style={{padding:"10px"}} >Reset</button>
    </div>
  );
}

export default App;
