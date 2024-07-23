import { useEffect, useState } from "react";
import { getId } from "../../../src/utils/index.js";
// import { useParams } from "react-router-dom";
// import axios from "axios";

function Chat({ socket, username, room }) {
  //   const [myId, setMyId] = useState("");
  //   const [my, setMy] = useState("");
  // const { id } = useParams();
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  ////////////////
  console.log("recieved id", getId());
  ////////////////////
  //   const GetMyId = async () => {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       console.log("No token found in localStorage");
  //     }

  //     console.log("Token found in localStorage:", token);
  //     const resp = await axios.get(
  //       `http://localhost:1600/user/profile/${getId()}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     setMy(resp.data._id);
  //     console.log("responseeeee", resp);
  //   };
  //   console.log("my", my);

  console.log("room set", room);
  ///////////////////////////

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        getid: getId(),
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList([...messageList, messageData]),
        // alert(currentMessage);
        //   console.log("hiiiiii", username);
        setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("daaaa", data);
      console.log("getId", getId());
      ///this site is getid12-anoop12
      //getid12=anoop12
      //room=33

      //from getid33-pallavi33 to
      // data.room=anoop12
      if (data.room == getId()) {
        if (room == data.getid) {
          setMessageList([...messageList, data]);
          alert(data.message);
        } else {
          console.log("no user found in yor chatlist");
        }
      }
    });
  });
  // console.log("msg", messageList);

  return (
    <div className="chat-window">
      <div className="chat-body">
        {messageList.map((messageContent, index) => {
          return (
            <div
              className="message"
              key={index}
              id={username === messageContent.author ? "you" : "other"}
            >
              <div className="msg2">
                <div className="message-content">
                  <p>
                    {messageContent.message}
                    <br />
                    <p className="p2">{messageContent.time}</p>
                  </p>
                </div>
                {/* <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button className="send" onClick={sendMessage}>
          &#9658;
        </button>
      </div>
    </div>
  );
}

export default Chat;
