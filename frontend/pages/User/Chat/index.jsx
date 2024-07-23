import { useParams } from "react-router-dom";
import "./chat.css";
import Chat from "./Chat.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { getId } from "../../../src/utils/index.js";
// import { useSearchParams } from "react-router-dom";

const socket = io.connect("http://localhost:1400");

const Inbox = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    // if (username !== "" && room !== "") {
    socket.emit("join_room", userId);

    setShowChat(true);
    // }
  };
  // to get other user to chat
  const GetPro = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found in localStorage");
    }
    console.log("Token found in localStorage:", token);

    const getresponse = await axios.get(
      `http://localhost:1400/user/profile/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Response from server:", getresponse.data);
    if (getId() == getresponse.data._id) {
      console.log("no user selected");
    } else {
      setUsername(getresponse.data.user.name);
      //to get profile id
      ///////////////////////akhil id///////////////my id
      setUserId(getresponse.data._id);
      // console.log("getttttttt", userId);
    }

    // setRoom(userId);

    //  catch (error) {
    //   console.error("Error fetching profile:", error.message);
    //   // Handle error (e.g., show error message to user)
    // }
  };
  // const use = datt.user && datt.user.name;
  console.log("getttttttt", userId);
  console.log("username1", username);

  useEffect(() => {
    joinRoom(), GetPro();
  }, []);

  console.log("halooooooooo", userId);

  const proBtn = () => {
    navigate(`/mypro/${getId()}`);
  };

  const Hombtn = () => {
    navigate(`/landing/${id}`);
  };
  // console.log("roooom2", id);

  return (
    <div className="land">
      <div className="headdd">{/* <h1 className="Mat">Matrimony</h1> */}</div>

      <div className="page">
        <div className="people">
          <div className="sidebar2">
            {" "}
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
            <button className="probt" onClick={proBtn}>
              profile
            </button>
            <button className="probt1">chat</button>
            {/* <button className="probt">Saved</button> */}
            <button className="probt">Notification</button>
            <button className="probt">settings </button>
            <button className="probt">About</button>
            {/* <h3>Logout</h3> */}
          </div>
          <div className="header2">
            {/* <h1 className="heading">header</h1> */}
            <div className="inbox">
              <button className="msg">Inbox</button>
              <button className="msg">Accepted</button>
              <button className="msg">Request</button>
              <button className="msg">Saved</button>
            </div>

            <button className="btn7">Logout</button>
            {/* <h2 className="fill">profile</h2> */}
          </div>
          <div className="content2">
            <form className="form1">
              {/* <h1>message</h1> */}
              <div className="searchbar">
                <input className="search3" type="text" placeholder="search" />
                <button className="find">find</button>
              </div>
              <h3>
                {" "}
                <img
                  className="img5"
                  src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                  alt=""
                />
                new chat
              </h3>
            </form>
            <div className="form2">
              <h1 className="profileeee">
                <img
                  className="img2"
                  src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                  alt=""
                />

                {username}
              </h1>
              {!showChat ? (
                <h1>no data</h1>
              ) : (
                <Chat socket={socket} username={username} room={userId} />
                // <Chat socket={socket} room={room} />
              )}

              {/* <input
                placeholder="______send message____"
                className="chatinp"
                type="text"
                name=""
                id=""
              />
              <button className="chatbtn">send</button> */}
            </div>
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

export default Inbox;

// import "./chat.css";
// import io from "socket.io-client";
// import { useEffect, useState } from "react";
// import Chat from "../Chat.jsx";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const socket = io.connect("http://localhost:2000");

// const Inbox = () => {
//   const { id } = useParams();
//   const [username, setUsername] = useState("");
//   const [room, setRoom] = useState("");
//   const [showChat, setShowChat] = useState(false);

//   const joinRoom = () => {
//     // if (username !== "" && room !== "") {
//     socket.emit("join_room", room);
//     setShowChat(true);
//     // }
//   };
//   //to Get Other user details
//   const GetPro = async () => {
//     const responsee = await axios.get(
//       `http://localhost:2000/user/profile/${id}`
//     );
//     console.log("OtherUserId", responsee);
//     setUsername(responsee.data.name);
//     // joinRoom();
//   };
//   //   console.log("uidddddddddd", uid);

//   useEffect(() => {
//     GetPro(), setRoom("12"), joinRoom();
//   });

//   return (
//     <div className="App">
//       {!showChat ? (
//         <div className="joinChatContainer">
//           <h3>Join A Chat</h3>
//           {/* <input
//             type="text"
//             placeholder="John..."
//             onChange={(event) => {
//               setUsername(event.target.value);
//             }}
//           /> */}
//           {/* <input
//             type="text"
//             placeholder="Room ID..."
//             onChange={() => {
//               setRoom(["hlo", "hai"]);
//             }}
//           /> */}
//           {/* <button onClick={joinRoom}>Join A Room</button> */}
//         </div>
//       ) : (
//         <Chat socket={socket} username={username} room={room} />
//       )}

//       {/* <Chat socket={socket} username={username} room={room} /> */}
//     </div>
//   );
// };

// export default Inbox;
