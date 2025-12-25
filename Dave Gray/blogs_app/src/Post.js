import { Link } from "react-router-dom"

function Post({ post }) {
  const postBody = post.body || "";

  return (
    <article className="post">
        <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
        </Link>
        <p className="postBody">
            {
                postBody.length <= 25 ?
                postBody :
                `${postBody.slice(0, 25)}...`
            }
        </p>
    </article>
  )
}

export default Post