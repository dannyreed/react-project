import "./register.css"
import TopBar from "../../components/topbar/TopBar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [words, setWords] = useState({"word1": '', "word2": ''});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/api/auth/register", {
        username,
        email,
        password
      })
      res.data && window.location.replace("/login");
    } catch(err) {
      console.log(err);
      setError(true);
    }
  }
  return (
    <>
      <TopBar/>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form onSubmit={handleSubmit} className="registerForm">
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            onChange={e=>setUsername(e.target.value)}
            />
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email"
            onChange={e=>setEmail(e.target.value)}
            />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={e=>setPassword(e.target.value)}
            />
          <button type="submit" className="registerButton">Register</button>
          {error && <span style={{color:"red"}}>Something went wrong.</span>}
        </form>
        <button className="registerLoginButton">Login</button>
      </div>
    </>
  )
}
