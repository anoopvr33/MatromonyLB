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
    </div>
  );
};

export default Home;
