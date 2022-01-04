import "./register.css"
import TopBar from "../../components/topbar/TopBar";

export default function Register() {
  return (
    <>
      <TopBar/>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Enter your username"/>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email"/>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter your password"/>
          <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
      </div>
    </>
  )
}
