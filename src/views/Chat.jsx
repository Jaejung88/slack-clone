import React from "react";
import "../Chat.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
import db from "../firebase";
import Message from "./Message";
import ChatInput from "../components/ChatInput";
import requests from "../requests";
import Row from "../components/Row";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log("messages >>>>>>>", roomMessages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>

        <div className="chat__headerRight">
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>
        {roomDetails?.name === "Trending Now" ? <Row title="Trending Now" fetchUrl={requests.fetchTrending} /> : null}
        {roomDetails?.name === "Netflix Originals" ? <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} /> : null}
        {roomDetails?.name === "Top Rated" ? <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> : null}
        {roomDetails?.name === "Action Movies" ? <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} /> : null}
        {roomDetails?.name === "Comedy Movies" ? <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> : null}
        {roomDetails?.name === "Horror Movies" ? <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} /> : null}
        {roomDetails?.name === "Romance Movies" ? <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> : null}
        {roomDetails?.name === "Documentary" ? <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} /> : null}
      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
