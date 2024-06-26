import "./login.css";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });

  const insert = (e) => {
    // console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const Onlogin = async () => {
  //   const response = await axios.post(`http://localhost:2300/user/login`, data);
  //   console.log(response);
  //   setData(response);
  // };

  return (
    <div className="full">
      <h1></h1>
      <div className="login">
        <h1>Login</h1>
        <div className="inputt">
          <label htmlFor="">Username</label>
          <input type="text" name="username" onChange={insert} />
          <br />

          <label htmlFor="">Password</label>
          <input type="text" name="password" />
        </div>

        <button className="log" onClick="">
          Login
        </button>
        <p className="account">
          have an account? {/* <a href="" >signup</a>{" "} */}
          <Link to="/signup" className="a">
            SignUp
          </Link>
        </p>
        <p className="or">or</p>
        <button className="google">Sign in with Google</button>
      </div>
      {/* <img src="https://wallpaperaccess.com/full/1276498.jpg" alt="" /> */}
    </div>
  );
};
export default Login;
