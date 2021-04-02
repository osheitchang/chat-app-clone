import React from "react";
import User from "./User";

function ChatBox() {
  return (
    <div>
      <header>
        <h1>This is my VERY first Heading!</h1>
        <form>
          <input label="chat" type="text" />
        </form>
      </header>
      <User name="Osheit" />
    </div>
  );
}

export default ChatBox;
