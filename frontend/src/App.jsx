import "./App.css";
import Login from "../pages/Authentication/UserLogin";
import Home from "../pages/Home/index.jsx";
import SignUp from "../pages/Authentication/UserSignup/index.jsx";
import Profile from "../pages/Profilecreation/index.jsx";
import Landing from "../pages/Landing/index.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
      </Routes>
    </div>
  );
};

export default App;

/////////
