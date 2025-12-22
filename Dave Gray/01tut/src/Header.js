function Header({title = "Groceries List"}) {
  return (
    <header style={{
        backgroundColor:"blue",
        display:"flex",
        justifyContent:"start",
        fontSize:"30px"
    }}>
        {title}
    </header>
  )
}

export default Header