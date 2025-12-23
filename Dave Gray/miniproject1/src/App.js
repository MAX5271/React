import ColorBox from "./ColorBox"
import ColorInput from "./ColorInput"
import { useState } from "react";
import TextColorToggle from "./TextColorToggle";

function App() {

  const [color,setColor] = useState("");
  const [isDark,setIsDark] = useState(false);


  return (
    <main>
      <TextColorToggle isDark={isDark} setIsDark={setIsDark} />
      <ColorBox color={color} isDark={isDark} />
      <ColorInput color={color} setColor={setColor}  />
    </main>
  )
}

export default App