import "./sidebar.css"
import { useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats,setCats] = useState([]);
  useEffect(()=> {
    let getReq = "/api/categories/";
    if(window.location.hostname == 'localhost') {
      getReq = "/api/categories/";
    } else {
      getReq = "http://api.danny-react-resume.wl.r.appspot.com/api/categories";
    }
    const getCats = async (getReq) => {
      const res = await axios.get('/api/categories/');
      setCats(res.data);
    }
    console.log(getReq);
    getCats(getReq);
  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">
          ABOUT ME
        </span>
        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat)=>(
            <li className="sidebarListItem">
              <Link to={`/?cat=${cat.name}`}>{cat.name}</Link></li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        </div>
      </div>
    </div>
  )
}
