import "./post.css"
import { Link } from "react-router-dom";

export default function Post({post}) {
  return (
    <div className="post">
      {post.photo && (
        <img
          alt=""
          className="postImg"
          src={post.photo}
          />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c)=> {
            <span className="postCat">{c.name}</span>
          })}
        </div>
        <Link to={`/post/${post._id}`} className="postTitle link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr></hr>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  )
}
