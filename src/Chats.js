import { Avatar } from '@material-ui/core';
import { ChatBubble, Search } from '@material-ui/icons';
import React from 'react';
import "./Chats.css";

export default function Chats() {
  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar className="chats__avatar" />
        <div className="chats__search">
          <Search />
          <input placeholder="friends" type="text"/>
        </div>
        <ChatBubble className="chats__chatIcon" />
      </div>
      <div className="chat__posts">
        
      </div>
    </div>
  )
}
