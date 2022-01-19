import React from "react";
import { navigate } from "@reach/router";
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';

const HomePage_Signed_In = ({ firstName, lastName, email }) => {
  const handleChat = () => {
    navigate("/chatbook");
  }
  const handleLogout = () => {
   alert("Logging out now"); 
  }
  const handleProfile = () => {
    navigate("/profile");
  } 

  return (
    <div>
      <h1>Welcome to Mixer</h1>
      <h2>Meet new people through random conversations here!</h2>
      <button onClick={handleChat}>Join a Conversation </button>
      <button onClick={handleProfile}>Your Profile</button>
      <button onClick={handleLogout}> Logout </button>
    </div>
  );
};

export default HomePage_Signed_In;