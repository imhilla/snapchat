import { Avatar } from '@material-ui/core';
import { StopRounded } from '@material-ui/icons';
import React from 'react';
import './Chat.css';
import ReactTimeAgo from 'react-time-ago';

export default function Chat({ id, profilePic, username, timestamp, imageUrl, read }) {
  return (
    <div className="chat">
      <Avatar src={profilePic} className="chat_avatar" />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>Tap to view - <ReactTimeAgo date={new Date(timestamp?.toDate()).toUTCString()}/></p>
      </div>
      {!read && <StopRounded className="chat__readIcon" />}
    </div>
  )
}
