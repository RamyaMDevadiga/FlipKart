import "./../styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Chat from "./Chat";

import Header from "./Header";
import PersonalChat from "./PersonalChat";

// https://my-json-server.typicode.com/codebuds-fk/chat/chats
export default function Home() {
  const [chats, setChats] = useState([]);

  const url = "https://my-json-server.typicode.com/codebuds-fk/chat/chats";
  useEffect(() => {
    axios.get(url).then((res) => {
      setChats(res.data);
      convertTime(res.data);
      // console.log(res.data);
    });
  }, []);

  function convertTime(data) {
    let newArray = data.map((item) => {
      // console.log(item.latestMessageTimestamp)

      var dateFormat = new Date(item.latestMessageTimestamp);
      item.time =
        dateFormat.getDate() +
        "/" +
        (dateFormat.getMonth() + 1) +
        "/" +
        dateFormat.getFullYear();

      return item;
    });
    setChats(newArray);
  }
  const handleChat = ({ eachChat }) => {};
  return (
    <div>
      <div className="container">
        <Header chats={chats} setChats={setChats} />
        {chats.map((eachChat) => {
          return (
            <div
              className="item"
              key={eachChat.id}
              onClick={() => handleChat({ eachChat })}
            >
              <span className="emoji" role="img">
                🧭
              </span>{" "}
              <span className="itemTxt">{eachChat.title}</span>
              <span className="time">{eachChat.time}</span>
              <div>
                <span className="itemTxt">Order {eachChat.orderId}</span>
              </div>
              <div>
                <Chat messageList={eachChat.messageList} />
                {/* {eachChat.messageList&&eachChat.messageList.map((mes,index)=>{
              return <span key={index}>{mes}</span>
           })} */}
              </div>
            </div>
          );
        })}
        <div className="chatBox">PersonalChat</div>
      </div>

      {/* <PersonalChat /> */}
    </div>
  );
}
