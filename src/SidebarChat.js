import "./SidebarChat.css";
import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";

function SidebarChat({addNewChat}) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
      const roomName = prompt("Please enter name for chat");

      if(roomName){
        //Do something with database

      }
  };


  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h1>Room Name</h1>
        <p>Last message...</p>
      </div>
    </div>
  ): (
    <div onClick= {createChat}
    className="sidebarChat">
        <h2>Add New chat</h2>
    </div>
  );
}

export default SidebarChat;
