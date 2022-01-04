import "./post.css"
import {
  Link
} from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
      <img src="https://m.media-amazon.com/images/I/511fwCg5ZtL._SL1000_.jpg" alt="" className="postImg"/>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <Link to="/post/123" className="postTitle link">
          Lorem ipsum dolor sit fundamen
        </Link>
        <hr></hr>
        <span className="postDate">Jan 2, 2022</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}
