import "./App.css";
import Login from "../pages/Authentication/UserLogin";
// import Home from "../pages/Home/index.jsx";
import SignUp from "../pages/Authentication/UserSignup/index.jsx";
import Profile from "../pages/Profilecreation/index.jsx";
import Landing from "../pages/User/Landing/index.jsx";
import Job from "../pages/job/index.jsx";
import Employe from "../pages/job/Employe/index.jsx";
import Registration from "../pages/Registration/index.jsx";
import JobSeeker from "../pages/job/seeker/index.jsx";
import Intrest from "../pages/Intrest/index.jsx";
import Confirm from "../pages/Intrest/confirm/index.jsx";
import Myprofile from "../pages/User/MyProfile/index.jsx";
import Inbox from "../pages/User/Chat/index.jsx";
import Other from "../pages/User/OtherProfile/index.jsx";
import Choose from "../pages/Choose/index.jsx";
import EcomLand from "../pages/Ecommerce/Landing2/index";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="/login" element={<SignUp />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/landing/:id" element={<Landing />}></Route>
        <Route path="/job/:id" element={<Job />}></Route>
        <Route path="/job/employe/:id" element={<Employe />}></Route>
        <Route path="/job/seeker/:id" element={<JobSeeker />}></Route>
        <Route path="/registration/:id" element={<Registration />}></Route>
        <Route path="/intrest/:id" element={<Intrest />}></Route>
        <Route path="/confirm/:id" element={<Confirm />}></Route>
        <Route path="/mypro/:id" element={<Myprofile />}></Route>
        <Route path="/chat/:id" element={<Inbox />}></Route>
        <Route path="/other/:id" element={<Other />}></Route>
        <Route path="/choose/:id" element={<Choose />}></Route>
        <Route path="/ecom/landing2" element={<EcomLand />}></Route>
      </Routes>
    </div>
  );
};

export default App;

/////////
