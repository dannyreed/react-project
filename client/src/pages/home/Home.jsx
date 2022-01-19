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
  const {search} = useLocation();

  useEffect(()=>{
    let getReq = "/api/posts/";
    console.log('if condition: ' + (window.location.hostname === 'localhost'));
    console.log('window.location.hostname: ' + window.location.hostname);
    if(window.location.hostname === 'localhost') {
      // Changing with proxy on
      getReq = "/api/posts/" + search;
      window.console.log('getReq from within if: ' + getReq);
    } else {
      getReq = "http://api.danny-react-resume.wl.r.appspot.com/api/posts"+search;
    }
    window.console.log('getReq from above fetchPosts: ' + typeof getReq);
    const fetchPosts = async (getReq) => {
      console.log('getReq from within async fn: ' + getReq);
      const res = await axios.get('/api/posts');
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
