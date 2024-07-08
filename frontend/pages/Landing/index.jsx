import { useParams } from "react-router-dom";
import "./landing.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";

const Landing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const [dat, setData] = useState([]);
  const [fill, setFill] = useState(dat);
  const [gain, setGain] = useState([]);
  // const [userr, setUserr] = useState([]);

  const Getprofile = async () => {
    const getresponse = await axios.get(
      `http://localhost:1400/user/profile/profile/landing`
    );
    console.log(getresponse);
    setData(getresponse.data);
    setFill(getresponse.data);
    // setUserr(getresponse.data && getresponse.data.user);
  };

  // dat.map((i) => {
  //   setUserr(i.user);
  // });

  const onSearch = (e) => {
    const { newdata } = e.target.value;
    setQuery(newdata);
    ////
    const filtered = dat.filter((item) => {
      // const  = item.user && item.user.name;
      // console.log(item.user && item.user.name);
      // setUserr(item.user && item.user.name),
      // item.userr
      // userr.filter((ite) => {
      // item.toLowerCase().includes(newdata.toLowerCase());
      // item.user &&
      item.user.name &&
        typeof item.user.name === "string" &&
        item.user.name.toLowerCase().includes(newdata.toLowerCase());
      // });

      // item.user && typeof item.user === 'string' &&
      // item.user.toLowerCase().includes(newQuery.toLowerCase())

      // item.gender.toLowerCase().includes(newdata.toLowerCase())
    });
    console.log("haaaaa", filtered);
    setFill(filtered);
    // console.log(filtered);
  };
  const onClick = () => {
    console.log("hey");
    setGain(fill);
  };

  useEffect(() => {
    Getprofile();
  }, []);
  // console.log("hai", { dat: dat && dat.user });
  const proBtn = () => {
    navigate(`/mypro/${id}`);
  };

  return (
    <div className="land">
      <div className="headdd">{/* <h1 className="Mat">Matrimony</h1> */}</div>

      <div className="page">
        <div className="people">
          <div className="sidebar">
            <div className="close">
              <img
                className="propic"
                src="https://th.bing.com/th/id/OIP.rM81T2vECiRhkckDanbD9QHaEo?rs=1&pid=ImgDetMain"
                alt=""
              />
              {/* <button onClick={proBtn}>profile</button> */}
              {/* <h3 >Profile</h3> */}
            </div>
            <h1 className="Mypro">Matrimony</h1>

            <h3>chat</h3>
            <h3>Saved</h3>
            <h3>Notification</h3>
            <h3>settings </h3>
            <h3>About</h3>
            <h3>Logout</h3>
          </div>
          <div className="header">
            {/* <h1 className="heading">header</h1> */}
            <div className="search">
              {/* <h3>search</h3> */}
              <input
                value={query}
                className="inp"
                type="text"
                onChange={onSearch}
                placeholder="------search here-----"
              />
              <button className="btns" onClick={onClick}>
                search
              </button>

              <h2 className="fill">filter</h2>
            </div>
            <button onClick={proBtn}>profile</button>
            {/* <h2 className="fill">profile</h2> */}
          </div>
          <div className="content">
            {gain.map((iten) => {
              return (
                <div className="post">
                  <div className="pic">
                    <img
                      className="img"
                      src="https://th.bing.com/th/id/OIP.rM81T2vECiRhkckDanbD9QHaEo?rs=1&pid=ImgDetMain"
                      alt=""
                    />
                  </div>
                  <h4 className="name">{iten.user && iten.user.name}</h4>
                  <p className="name">{iten.occupation}</p>

                  <p className="name">{iten.address}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <footer></footer>

      {/* <input type="radio" id="option3" name="favorite_color" value="blue">
<label for="option3">Blue</label>

<input type="radio" id="option4" name="favorite_color" value="yellow">
<label for="option4">Yellow</label> */}
    </div>
  );
};

export default Landing;
