import "./TopBar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">BLOG</li>
          <li className="topListItem">
            <Link className="link" to="/login">LOGIN</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
          <img
            className="topImg"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
          <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
