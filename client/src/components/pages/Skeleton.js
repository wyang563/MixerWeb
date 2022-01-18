import React from "react";
import { navigate } from "@reach/router";
 
import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "689194321722-0l8sdh1vco87f0n3evgscf8ck4096t5j.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  const handleSignUp = () => {
    navigate("/signup");
  }
  const handlePageLogin = () => {
    navigate("/loginpage");
  }

  return (
    <>
      <h1>Welcome to Mixer</h1>
      <h2>Meet new people through random conversations here!</h2>
      <button onClick={handleSignUp}>Sign Up Here</button>
      <button onClick={handlePageLogin}> Login Here</button>

    </>
  );
};

export default Skeleton;
