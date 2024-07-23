import "./home.css";
// import Login from "../Authentication/UserLogin";
// import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">SignUp</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/landing">Landing</Link>
      <br />
      <Link to="/job">job</Link> <br />
      <a href="">jjj</a>
      <input type="text" />
      <div id="hhai" className="hai"></div>
    </div>
  );
};

export default Home;
