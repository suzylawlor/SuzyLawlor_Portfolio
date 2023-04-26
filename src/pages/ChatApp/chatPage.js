import React, { useContext, useState, useEffect } from "react";
import { Context } from "/context/chatIndex";
import { useRouter } from "next/router";
import axios from "axios";

const Auth = () => {
  const { username, setUsername, secret, setSecret } = useContext(Context);
  const [defaultUsername, setDefaultUsername] = useState("adam_la_morre");
  const [defaultPassword, setDefaultPassword] = useState("pass1234");

  const router = useRouter();

  useEffect(() => {
    setUsername(defaultUsername);
    setSecret(defaultPassword);
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 1 || secret.length === 1) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "e55a42b0-c623-4597-be32-d523f570ca59" } }
      )

      .then((r) => {
        router.push("../ChatApp/chats");
      });
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJS Chat</div>

          <div className="input-container">
            <input
              placeholder="Username"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
              value={secret}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
