// Importing necessary modules from React
import React, { useState, useEffect, useContext } from "react";
// Importing the Context from chatIndex
import { Context } from "/context/chatIndex";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

//Dynamically import the ChatEngine component from the "react-chat-engine" module
const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

//Dynamically import the MessageFormSocial component from the "react-chat-engine" module
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Home() {
  //Retrieve the values of "username" and "secret" from the Context using the useContext hook
  const { username, secret } = useContext(Context);
  //Define a state variable named "showChat" and its setter function using the useState hook, initializing it to "false"
  const [showChat, setShowChat] = useState(false);
  //Access the Next.js router using the useRouter hook
  const router = useRouter();

  //Execute the following code block once when the component mounts
  useEffect(() => {
    //Check if the "document" object is defined
    if (typeof document !== undefined) {
      //Set the "showChat" state variable to "true"
      setShowChat(true);
    }
  }, []);

  //Execute the following code block whenever "username" or "secret" values change
  useEffect(() => {
    //Check if "username" or "secret" values are empty
    if (username === "" || secret === "") {
      //Redirect the user to the "../ChatApp/chatPage" route using the router
      router.push("../ChatApp/chatPage");
    }
  }, [username, secret]);

  //If "showChat" is false, return an empty div
  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        {/*Render the ChatEngine component with the specified props*/}
        <ChatEngine
          height="calc(100vh - 212px)"
          projectID="
4ba297f9-a7d7-4f4c-8032-dbcf0f0ec816"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
}
