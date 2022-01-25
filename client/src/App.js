import logo from './logo.svg';
import TopBar from './components/topbar/TopBar'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Settings from './pages/settings/Settings'
import Write from './pages/write/Write'
import Single from './pages/single/Single'
import Anagram from './pages/anagram/Anagram'
import ScrollToTop from './components/scrolltotop/ScrollToTop'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home/> : <Register />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
        <Route path="/settings" element={user ? <Settings/> : <Register />} />
        <Route path="/write" element={user ? <Write/> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/anagram" element={<Anagram />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
