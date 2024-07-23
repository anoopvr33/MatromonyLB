import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getId } from "../../../src/utils/index.js";
import "./Mypro.css";

const Myprofile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);

  const Getprofile = async () => {
    const getresponse = await axios.get(
      `http://localhost:1400/user/profile/${getId()}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(getresponse);
    setData(getresponse.data);
  };
  useEffect(() => {
    Getprofile();
  }, []);
  const Chatbtn = () => {
    navigate(`/chat/${id}`);
  };
  const Hombtn = () => {
    navigate(`/landing/${id}`);
  };
  return (
    <div className="mypro">
      <div className="side2">
        <h1 className="Mypro">Matrimony</h1>
        <div className="close">
          <img
            className="propic"
            src="https://th.bing.com/th/id/OIP.rM81T2vECiRhkckDanbD9QHaEo?rs=1&pid=ImgDetMain"
            alt=""
          />
          {/* <button onClick={proBtn}>profile</button> */}
          {/* <h3 >Profile</h3> */}
        </div>
        <button className="probt" onClick={Hombtn}>
          Home
        </button>

        <button className="probt1">profile</button>
        <button className="probt" onClick={Chatbtn}>
          chat
        </button>
        {/* <button className="probt">Saved</button> */}
        <button className="probt">Notification</button>
        <button className="probt">settings </button>
        <button className="probt">About</button>
        {/* <h3>Logout</h3> */}
      </div>
      {/* <button className="log">Logout</button> */}
      <div className="header1">
        {/* <h1 className="heading">header</h1> */}
        <img
          className="img3"
          src="https://th.bing.com/th/id/OIP.rM81T2vECiRhkckDanbD9QHaEo?rs=1&pid=ImgDetMain"
          alt=""
        />
        <img
          className="img1"
          src="\add_square_multiple_regular_icon_204091.png"
          alt=""
        />

        <button className="btn3">Edit</button>
        <button className="btn3">Logout</button>
        {/* <h2 className="fill">profile</h2> */}
      </div>
      <div className="context">
        {" "}
        {/* <h1>MyProfile</h1> */}
        <h2>User details</h2>
        <br />
        <h3>Name : {data.user && data.user.name}</h3>
        <h3>username : {data.user && data.user.username}</h3>
        <br />
        <h2>Registration details</h2>
        <br />
        <h3>Proflepic:{data.reg && data.reg.propic}</h3>
        <h3>Age : {data.reg && data.reg.age}</h3>
        <h3>DOB:{data.reg && data.reg.dob}</h3>
        <h3>{data.reg && data.reg.propic}</h3>
        <h3>Drinking:{data.reg && data.reg.drinking}</h3>
        <h3>Smoking:{data.reg && data.reg.smoking}</h3>
        <h3>Hobbies{data.reg && data.reg.hobbies}</h3>
        <h3>Qualification{data.reg && data.reg.qualification}</h3>
        <br />
        <h2>Job Details</h2>
        <br />
        <h3>Company{data.job && data.job.company}</h3>
        <h3>Designation: {data.job && data.job.designation}</h3>
        <h3>Location{data.job && data.job.location}</h3>
        <br />
        <h2>Profile Details</h2>
        <br />
        <h3>Gender: {data.gender}</h3>
        <h3>About :{data.about}</h3>
        <h3>Address:{data.address}</h3>
        <h3>Contact{data.contact}</h3>
        <h3>Email:{data.email}</h3>
        <h3>Education:{data.education}</h3>
        <h3>Body Type: {data.bodytype}</h3>
        <h3>Height :{data.height}</h3>
        <h3>Weight :{data.weight}</h3>
        <h3>Occupation :{data.occupation}</h3>
        <h3>Passion :{data.passion}</h3>
        <h3>Future Plan :{data.futureplan}</h3>
        <h3>Income{data.income}</h3>
        <h3>Religion :{data.religion}</h3>
        <h3>Father job :{data.fatherjob}</h3>
        <h3>Mother Job :{data.motherjob}</h3>
        <h3>Siblings :{data.siblings}</h3>
        <h3>Marrital status :{data.marrital}</h3>
        <h3>Mother Tongue :{data.motherTongue}</h3>
        <br />
        <h3></h3>
      </div>
    </div>
  );
};

export default Myprofile;
