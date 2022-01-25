import "./home.css"
import {useState, useEffect} from "react";
import Header from "../../components/header/Header";
import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import axios from "axios";
import {useLocation} from 'react-router';

export default function Home() {
  const [posts,setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(()=>{
    let getReq = "/api/posts/" + search;
    const fetchPosts = async (getReq) => {
      const res = await axios.get(getReq);
      setPosts(res.data);
    };
    fetchPosts(getReq);
  },[search]);
  return (
    <>
      <TopBar/>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar posts={posts} />
      </div>
    </>
  )
}
