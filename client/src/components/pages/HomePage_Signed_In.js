import React from "react";
import { navigate } from "@reach/router";
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';

const HomePage_Signed_In = ({ firstName, lastName, email }) => {
  const handleChat = () => {
    alert("Joining chat now");
  }
  const handleLogout = () => {
   alert("Logging out now"); 
  } 

  return (
    <div>
      <h1>Welcome to Mixer</h1>
      <h2>Meet new people through random conversations here!</h2>
      <button onClick={handleChat}>Join a Conversation </button>
      <button onClick={handleLogout}> Logout </button>
    </div>
  );
};

export default HomePage_Signed_In;