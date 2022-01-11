import { useLocation } from "react-router";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "./singlePost.css"

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  // Second param to useEffect tells it when to re-run (if the contents change)
  // In this case, it is location.
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  },[path]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src="{post.photo}"
            alt=""
            className="singlePostImg"
          />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i class="singlePostIcon far fa-edit"></i>
            <i class="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span class="singlePostAuthor">Author: <b>
            <Link to={`/?user=${post.username}`} className="link">{post.username}</Link></b></span>
          <span class="singlePostDate">Date: <b>{new Date(post.createdAt).toString()}</b></span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  )
}
