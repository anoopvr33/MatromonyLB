import { useParams } from "react-router-dom";
import "./landing.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getId } from "../../../src/utils/index.js";
// import { useSearchParams } from "react-router-dom";

const Landing = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dat, setData] = useState([]);
  const [filter, setFilter] = useState(dat);
  const [query, setQuery] = useState([]);
  const [ls, setLs] = useState("");

  ///////////////////////////////////////////////////////////
  const Getprofile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found in localStorage");
    }

    console.log("Token found in localStorage:", token);

    const getresponse = await axios.get(
      `http://localhost:1400/user/profile/profile/landing`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Response from server:", getresponse.data);
    setData(getresponse.data);
  };

  ////////////////////////////////////////////////

  //Search  users by name
  const onFilter = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    const filtered = dat.filter(
      (item) =>
        item.user &&
        item.user.name.toLowerCase().includes(newQuery.toLowerCase())
    );
    console.log("hey", filtered);
    setFilter(filtered);
  };
  const SearchBtn = () => {
    setData(filter);
  };

  /////////////////////
  //filter users by location
  const Getlocation = async (e) => {
    setLs("hai");
    console.log("lssssssaa", ls);

    const response = await axios.post(
      `http://localhost:1400/user/profile/profile/name`,
      { address: e.target.value }
    );
    // console.log("heyyyy", response);
    setData(response.data);
  };
  /////////////////////
  useEffect(() => {
    Getprofile();
  }, []);

  const proBtn = () => {
    navigate(`/mypro/${getId()}`);
  };
  const Chatbtn = () => {
    navigate(`/chat/${id}`);
  };
  ////
  const Chat = (id) => {
    // const chatResponse = await axios.post(
    //   `http://localhost:1400/user/chat/chatlist`,
    //   { profileId: id }
    // );
    // console.log("byeeeee", chatResponse);
    navigate(`/chat/${id}`);
  };
  ////////
  const Hombtn = () => {
    navigate(`/landing/${id}`);
  };
  const Viewbtn = (id) => {
    navigate(`/other/${id}`);
  };
  const Logout = () => {
    navigate("/");
  };

  return (
    <div className="land">
      <div className="page">
        <div className="people">
          <div className="sidebar">
            <h1 className="Mypro">Matrimony</h1>
            <div className="close">
              <img
                className="propic"
                src="https://th.bing.com/th/id/OIP.rM81T2vECiRhkckDanbD9QHaEo?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
            <button className="probt" onClick={Hombtn}>
              Home
            </button>
            <button className="probt" onClick={proBtn}>
              profile
            </button>
            <button className="probt" onClick={Chatbtn}>
              chat
            </button>

            <button className="probt">Notification</button>
            <button className="probt">settings </button>
            <button className="probt">About</button>
          </div>
          <div className="header">
            <select
              // name="address"
              id=""
              className="select"
              onChange={Getlocation}
              placeholder="category"
              disabled={0}
            >
              <option value="0">District</option>
              <option value="kozhikode">kozhikode</option>
              <option value="thrissur">Thrissur</option>
              <option value="palakad">palakad</option>
              <option value="kollam">kollam</option>
              <option value="5">Ernakulam</option>
            </select>

            <div className="search">
              <input
                value={query}
                className="inp"
                type="text"
                onChange={onFilter}
                placeholder="------search here-----"
              />
              <input type="hidden" name="address" />
              <button className="btns" onClick={SearchBtn}>
                search
              </button>
            </div>
            <button className="btn8" onClick={Logout}>
              Logout
            </button>
          </div>
          <div className="content">
            {dat.map((iten, index) => {
              return (
                <div className="post" key={index}>
                  <div className="pic">
                    <img
                      className="img"
                      src="https://th.bing.com/th/id/OIP.rM81T2vECiRhkckDanbD9QHaEo?rs=1&pid=ImgDetMain"
                      alt=""
                    />
                  </div>
                  {/* <p>{iten}</p> */}
                  <h4 className="name">{iten.user && iten.user.name}</h4>
                  <p className="name">{iten.occupation}</p>

                  <p className="name">{iten.address}</p>
                  <div className="view">
                    <button className="view1" onClick={() => Viewbtn(iten._id)}>
                      view
                    </button>
                    <button className="view2" onClick={() => Chat(iten._id)}>
                      Chat
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default Landing;
