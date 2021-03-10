import { Avatar } from '@material-ui/core';
import { ChatBubble, Search } from '@material-ui/icons';
import React, {useState, useEffect} from 'react';
import "./Chats.css";
import { db } from './firebase';
import Chatone from './Chatone';

export default function Chats() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })))
    }) 
  }, [posts])
  

  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar className="chats__avatar" />
        <div className="chats__search">
          <Search />
          <input placeholder="friends" type="text" />
        </div>
        <ChatBubble className="chats__chatIcon" />
      </div>
      <div className="chat__posts">
        {posts.map(({ id, data: { profilePic, username, timestamp, imageUrl, read } }) => (
          <Chatone
            key={id}
            id={id}
            username={username}
            timestamp={timestamp}
            imageUrl={imageUrl}
            read={read}
            profilePic={profilePic}
          />
        ))}
      </div>
    </div>
  )
}
