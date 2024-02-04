import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage,setTweetImage]=useState('');

  const sendTweet=e=>{
    e.preventDefault(); 
    db.collection('posts').add({
        displayName:'Alaa',
        username:'greatLol',
        verified:true, 
        text: tweetMessage,
        image:tweetImage,
        
    })
    setTweetImage('');
    setTweetMessage('');
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="what's happening?"
          ></input>
        </div>
        <input
        value={tweetImage}
        onChange={e=>setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
        ></input>
        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
