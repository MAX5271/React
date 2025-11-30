import { useState } from "react";
import Second from "./buttons/second";
import CyberpunkProfile from "./uiStyles/CyberPunk";
import SmartHomeDashboard from "./uiStyles/Neumorphism";
import SwissStyleArticle from "./uiStyles/Swiss_Style";

export default function App() {

  const [display,setDisplay] = useState(1);
  const displayMap = {
    1:<CyberpunkProfile/>,
    2:<SmartHomeDashboard/>,
    3: <Second/>,
    4:<SwissStyleArticle/>
  };

  return (
    <div>
      <input value={display} onChange={(e)=>setDisplay((Number(e.target.value)))} type="number" class="border-2 border-black-500"/>
      {
        displayMap[display]
      }
    </div>
  );
}
