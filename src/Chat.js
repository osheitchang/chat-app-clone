import React, { useState, useEffect } from "react";
import "./Chat.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import db from "./firebase";
import { useParams} from 'react-router-dom'

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    if(roomId) {
      db.collection("rooms")
      .doc(roomId)
      .onSnapshot(snapshot => {
          setRoomName(snapshot.data().name);

        db.collection('rooms').doc(roomId).collection("messages").orderBy('timestamp','asc').onSnapshot(snapshot => (
          setMessages(snapshot.docs.map((doc)=> doc.data()))
        ))

        });
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500), []);
  });

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed >>>", input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`ht  tps://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
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
      {messages.map(message=> (
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name"> 
          {message.name}</span>
          {message.message}
          <span className="chat__timestamp"> {new Date(message.timestamp?.toDate()).toUTCString()}</span>
        </p>
      ))}
        
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a Message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
