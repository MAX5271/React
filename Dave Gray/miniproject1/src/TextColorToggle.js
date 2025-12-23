function TextColorToggle({isDark,setIsDark}) {
  return (
    <button onClick={()=>setIsDark(!isDark)} >Toggle Text Color</button>
  )
}

export default TextColorToggle;