import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
// import useNavigate from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });

  const insert = (e) => {
    // console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Onlogin = async () => {
    const response = await axios.post(
      `http://localhost:1400/user/login`,
      // {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
      // },
      data
    );

    localStorage.setItem("token", response.data.token);

    console.log("hlooooooooooooooo", response);
    if (response.data.token) {
      navigate(`/choose/${response.data.prof._id}`);
    }
  };

  const respos = async () => {
    window.location.href = "http://localhost:1400/pass/login/federated/google";
  };

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
          <input type="text" name="password" onChange={insert} />
        </div>

        <button className="log1" onClick={Onlogin}>
          Login
        </button>
        <p className="account">
          have an account? {/* <a href="" >signup</a>{" "} */}
          <Link to="/signup" className="a">
            SignUp
          </Link>
        </p>
        <p className="or">or</p>
        <button className="google" onClick={respos}>
          Sign in with Google
        </button>
      </div>
      {/* <img src="https://wallpaperaccess.com/full/1276498.jpg" alt="" /> */}
    </div>
  );
};
export default Login;
