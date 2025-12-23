function Comments({commentsData}) {
  return (
    <ul>
        {
            commentsData.map((comment)=> <li key={comment.id}>{JSON.stringify(comment)}</li> )
        }
    </ul>
  )
}

export default Comments