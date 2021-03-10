import { Avatar } from '@material-ui/core';
import { ChatBubble, Search } from '@material-ui/icons';
import React, {useState, useEffect} from 'react';
import "./Chats.css";
import { auth, db } from './firebase';
import Chatone from './Chatone';
import { selectUser } from './features/appSlice';
import {useSelector} from 'react-redux';

export default function Chats() {
  const [posts, setPosts] = useState([])
  const user = useSelector(selectUser)
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
        <Avatar className="chats__avatar"
          src={user.profilePic}
          onClick={() =>{
            auth.signOut()
          }}
         />
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
