import React, { useState } from "react";
import db from "./firebase";
import "./ChatInput.css";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessages = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <button type="submit" onClick={sendMessages}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
