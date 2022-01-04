import "./home.css"
import Header from "../../components/header/Header";
import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";

export default function Home() {
  return (
    <>
      <TopBar/>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}
