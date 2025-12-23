function Header({handleSection,section}) {
  return (
    <header>
        <button onClick={()=>handleSection('user')} className={section==='user'?"activeButton":""} >USER</button>
        <button onClick={()=>handleSection('posts')} className={section==='posts'?"activeButton":""}>POSTS</button>
        <button onClick={()=>handleSection('comments')} className={section==='comments'?"activeButton":""}>COMMENTS</button>
    </header>
  )
}

export default Header