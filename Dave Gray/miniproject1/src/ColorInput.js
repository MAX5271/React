function ColorInput({color, setColor}) {

  return (
    <form className="colorInput" onSubmit={(e)=>e.preventDefault()} >
        <label htmlFor="colorInput"></label>
        <input
            autoFocus
            placeholder="Add color name"
            value={color}
            onChange={(e)=>setColor(e.target.value)}
        />
    </form>
  )
}

export default ColorInput