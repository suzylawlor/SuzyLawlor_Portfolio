// Importing necessary modules from React
import { useState, useEffect } from "react";
// Importing the Head component from Next.js
import Head from "next/head";

// Creating a functional component called Piano
const Piano = () => {
  // Using the useState hook to create and initialize state variables
  const [allKeys, setAllKeys] = useState([]); // State variable for allKeys
  const [volume, setVolume] = useState(0.5); // State variable for volume
  const [showKeys, setShowKeys] = useState(true); // State variable for showKeys
  const [audio, setAudio] = useState(null); // State variable for audio

  // useEffect hook to run code after the component has mounted
  useEffect(() => {
    // Creating a new Audio object and setting it to the audio state variable
    setAudio(new Audio("/music/a.wav"));
  }, []);

  // Array of piano keys with their corresponding classNames
  const pianoKeys = [
    { key: "a", className: "key white" },
    { key: "w", className: "key black" },
    { key: "s", className: "key white" },
    { key: "e", className: "key black" },
    { key: "d", className: "key white" },
    { key: "f", className: "key white" },
    { key: "t", className: "key black" },
    { key: "g", className: "key white" },
    { key: "y", className: "key black" },
    { key: "h", className: "key white" },
    { key: "u", className: "key black" },
    { key: "j", className: "key white" },
    { key: "k", className: "key white" },
    { key: "o", className: "key black" },
    { key: "l", className: "key white" },
    { key: "p", className: "key black" },
    { key: ";", className: "key white" },
  ];

  // Function to play a tune when a key is pressed or clicked
  const playTune = (key) => {
    // Setting the source of the audio element to the corresponding audio file
    audio.src = `/music/${key}.wav`;
    // Setting the volume of the audio element
    audio.volume = volume;
    // Playing the audio
    audio.play();

    // Finding the clicked key element and adding the "active" class
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    // Removing the "active" class after 150 milliseconds
    setTimeout(() => {
      clickedKey.classList.remove("active");
    }, 150);
  };

  // Event handler for volume change
  const handleVolume = (e) => {
    // Updating the volume state variable with the new value
    setVolume(e.target.value);
  };

  // Event handler for showKeys checkbox
  const handleKeysCheckbox = () => {
    // Toggling the showKeys state variable
    setShowKeys((prevShowKeys) => !prevShowKeys);
  };

  // Event handler for key press
  const pressedKey = (e) => {
    // Checking if the pressed key is included in the allKeys array
    // Calling the playTune function with the pressed key
    if (allKeys.includes(e.key)) playTune(e.key);
  };

  // Generating the list of piano keys to be rendered
  const renderedKeys = pianoKeys.map((pianoKey) => (
    <li
      // Setting the key attribute of the li element
      key={pianoKey.key}
      // Setting the className of the li element based on pianoKey's className and showKeys state
      className={`${pianoKey.className} ${showKeys ? "" : "hide"}`}
      // Setting the data-key attribute of the li element
      data-key={pianoKey.key}
      // Adding an onClick event listener to the li element to play the tune when clicked
      onClick={() => playTune(pianoKey.key)}
      // Displaying the piano key value inside the li element
    >
      <span>{pianoKey.key}</span>
    </li>
  ));

  return (
    <div className="keyboard-container">
      <div className="wrapper">
        <Head>
          <title>Keyboard</title>
        </Head>
        <header className="header">
          <h2>Playable Piano</h2>
          <div className="column volume-slider">
            <span>Volume</span>
            {/* Input element of type range for the volume slider */}
            <input
              type="range"
              // Setting the minimum value of the range slider to 0
              min="0"
              // Setting the maximum value of the range slider to 1
              max="1"
              // Setting the initial value of the range slider to the volume state variable
              value={volume}
              // Setting the step size of the range slider to "any"
              step="any"
              // Adding an onChange event listener to the range slider to handle volume changes
              onChange={handleVolume}
            />
          </div>
          <div className="column keys-checkbox">
            <span>Show Keys</span>{" "}
            {/* Input element of type checkbox for the keys checkbox */}
            <input
              type="checkbox"
              // Setting the checked state of the checkbox to the showKeys state variable
              checked={showKeys}
              // Adding an onChange event listener to the checkbox to handle showKeys changes
              onChange={handleKeysCheckbox}
            />
          </div>
        </header>
        {/*  display the piano keys */}
        <ul className="piano-keys">{renderedKeys}</ul>
      </div>
    </div>
  );
};

export default Piano;
