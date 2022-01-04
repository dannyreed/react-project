import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";

export default function Settings() {
  return (
    <>
      <TopBar/>
      <div className="settings">
        <div className="settingWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form action="" className="settingsForm">
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
              <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className=""/>
            </div>
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
                <input type="file" id="fileInput" style={{display:"none"}}/>
              </label>
              <label>Username</label>
              <input type="text" placeholder="Danny"/>
              <label>Email</label>
              <input type="text" placeholder="dreed3d3@gmail.com"/>
              <label>Password</label>
              <input type="text"/>
              <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar />
      </div>
    </>
  )
}
