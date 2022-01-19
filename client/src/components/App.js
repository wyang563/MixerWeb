import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import SignUp from "./pages/SignUp.js";
import LoginPage from "./pages/LoginPage.js";
import HomePage_Signed_In from "./pages/HomePage_Signed_In.js";
import Chatbook from "./pages/Chatbook.js";
import Profile from "./pages/profile.js";


import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <Router>
        <Skeleton path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        <SignUp path="/signup"/>
        <LoginPage path="/loginpage" />
        <HomePage_Signed_In path="/HomePage_Signed_In"/>
        <Chatbook path="/chatbook" />
        <Profile path="/profile" />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
