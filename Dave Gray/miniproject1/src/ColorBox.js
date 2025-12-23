function ColorBox({color,isDark}) {
  return (
    <div className="colorBox" style={{backgroundColor:color,color:color?isDark?"white":"black":"black"}} >
      {color?`${color}`:"Empty value"}
    </div>
  )
}

export default ColorBox;