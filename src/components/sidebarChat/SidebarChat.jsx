import "./SidebarChat.css";
import React, { useEffect, useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import db from "../../network/Firebase";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
      // do some clever database stuff
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          className="avatar"
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="newChat">
      <Button onClick={createChat} variant="contained" type="submit">
        Create New Chat
      </Button>
    </div>
  );
}

export default SidebarChat;
