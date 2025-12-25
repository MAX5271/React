import Feed from "./Feed"

function Home({posts}) {
  return (
    <main className="Home" >
        {
            posts.length?(
                <Feed posts={posts}/>
            ):(
                <p>No Posts To Display.</p>
            )
        }
    </main>
  )
}

export default Home