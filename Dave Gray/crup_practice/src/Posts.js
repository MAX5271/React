function Posts({postsData}) {
  return (
    <ul>
        {
            postsData.map((post)=><li key={post.id}>{JSON.stringify(post)}</li>)
        }
    </ul>
  )
}

export default Posts