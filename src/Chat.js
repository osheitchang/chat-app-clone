import React, { useState, useEffect } from "react";
import "./Chat.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic"
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";

function Chat() {

  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500), []);
  });

  const sendMessage = (e) =>{
    e.preventDefault();
    console.log("You typed >>>", input)
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room Number</h3>
          <p>Last Seen...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name"> Osherit</span>
          Whatsapp
          <span className="chat__timestamp"> 4:30pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a Message" type="text" />
          <button onClick={sendMessage} type="submit">Send Message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
