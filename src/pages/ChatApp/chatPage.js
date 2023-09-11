// Importing necessary modules from React
import React, { useContext, useState, useEffect } from "react";
// Importing the Context from chatIndex
import { Context } from "/context/chatIndex";
// Importing the useRouter hook from next/router
import { useRouter } from "next/router";
// Importing the axios library
import axios from "axios";

// Creating a functional component called Auth
const Auth = () => {
  // Accessing the username, setUsername, secret, and setSecret variables from the Context
  const { username, setUsername, secret, setSecret } = useContext(Context);
  // Creating state variables for defaultUsername and defaultPassword
  const [defaultUsername, setDefaultUsername] = useState("adam_la_morre");
  const [defaultPassword, setDefaultPassword] = useState("pass1234");

  // Accessing the router object using the useRouter hook
  const router = useRouter();

  // Running the effect once, after the component has mounted
  useEffect(() => {
    // Setting the username and secret state variables to their default values
    setUsername(defaultUsername);
    setSecret(defaultPassword);
  }, []);

  // Function to handle form submission
  function onSubmit(e) {
    // Preventing the default form submission behavior
    e.preventDefault();

    // Checking if the username or secret is too short
    if (username.length === 1 || secret.length === 1) return;

    // Making a PUT request to the chatEngine API to create or update a user
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "641c32f1-d3aa-4c45-b5b9-e70d5f94b315" } }
      )

      .then((r) => {
        // Redirecting to the chats page
        router.push("../ChatApp/chats");
      });
  }

  // Returning the JSX elements to be rendered
  return (
    <div className="background">
      <div className="auth-container">
        {/* Create a form element with an onSubmit event handler that calls the onSubmit function when the form is submitted*/}
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJS Chat</div>

          <div className="input-container">
            {/* Create an input element with the placeholder "Username", and an onChange event handler that calls the setUsername function with the value of the input*/}
            <input
              placeholder="Username"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>

          <div className="input-container">
            {/* Create an input element with the type "password", the placeholder "Password", and an onChange event handler that calls the setSecret function with the value of the input*/}
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
              value={secret}
            />
          </div>
          {/* Create a button element with the type "submit" and the className "submit-button" that displays the text "Login / Sign Up"*/}
          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
