//Utilise React hooks useState and useEffect to manage state and perform side effects
//Include state variables for volume, showKeys, and audio
//Initialise the audio object with useEffect hook
//Map an array of piano keys to generate JSX elements, handling key presses and clicks to play corresponding tunes

import { useState, useEffect } from "react";

import Head from "next/head";

// Create a functional component and start building our Piano
const Piano = () => {
  // useState hook to create and initialise the state variables:

  // State variable for volume
  //'volume' to store volume level. Initial volume set to 50%
  //'setVolume', function to update 'volume'
  const [volume, setVolume] = useState(0.5);

  // State variable for showKeys
  // 'showKeys' to determine whether keys are displayed or not. Initialised as true (keys showing)
  //'setShowKeys' function to update if 'showKeys' is true or false
  const [showKeys, setShowKeys] = useState(true);

  // State variable for audio
  // 'audio' will store the 'Audio' object
  // audio initially set as 'null'.
  // 'setAudio' used to update 'audio'. Function to put the Audio object into 'audio'
  const [audio, setAudio] = useState(null);

  // useEffect hook to run the setAudio function after the component has mounted
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

  // Function to play the tune when a key is clicked/pressed
  const playTune = (key) => {
    // Setting the source of the audio element to the corresponding audio file
    audio.src = `/music/${key}.wav`;
    // Setting the volume of the audio element to the current 'volume' state
    audio.volume = volume;
    // Playing the audio
    audio.play();

    // Visually show the key has been pressed
    // Variable to detect the clicked key through data-key value
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    // Visually represents the key has been clicked by adding 'active' class
    clickedKey.classList.add("active");

    // Removing the "active" class after 150 milliseconds
    setTimeout(() => {
      clickedKey.classList.remove("active");
    }, 150);
  };

  // Event handler for volume change
  // When user adjusts volume slider
  const handleVolume = (e) => {
    // Updating the volume state variable with the new volume value
    setVolume(e.target.value);
  };

  // Event handler for showKeys checkbox
  // When user selects On or Off (through toggle)
  const handleKeysCheckbox = () => {
    // Toggling the showKeys state variable
    // Take the state that showKeys was before toggle and set to opposite state
    setShowKeys((prevShowKeys) => !prevShowKeys);
  };

  // Generating the list of piano keys to be rendered
  // Use map function to select and transform each element in pianoKeys array
  // Create new rederedKeys array with pianoKey objects
  const renderedKeys = pianoKeys.map((pianoKey) => (
    // Create our list of pianoKey attributes
    <li
      // Apply the pianoKeys names to pianoKey objects
      key={pianoKey.key}
      // If showKeys 'true', no class name adjustment
      // If showKeys 'false', add class name "hide"
      className={`${pianoKey.className} ${showKeys ? "" : "hide"}`}
      // Apply data-key values to pianoKey objects
      data-key={pianoKey.key}
      // onClick event listener to activate playTune function with applied pianoKey values
      onClick={() => playTune(pianoKey.key)}
      // Rendering the piano key values inside the li element
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
        <header className="piano-text">
          <h2>Playable Piano</h2>
          <div className="panel volume-slider">
            <span>Volume</span>
            {/* Input element for the volume slider */}
            <input
              // type of input will be a slider measured from a 'range' of 0 - 1
              type="range"
              min="0"
              max="1"
              // Set the value of the range slider to the volume state (initially at 50%)
              value={volume}
              // Set the step size of the range slider to "any", no level increments
              step="any"
              // Adding an onChange event listener to the range slider to handle volume changes
              // handleVolume => setVolume => volume
              onChange={handleVolume}
            />
          </div>
          <div className="panel keys-checkbox">
            {/* Add a space character between text and checkbox */}
            <span>Show Keys</span>{" "}
            {/* Input element of type checkbox for the keys checkbox */}
            <input
              // input type to be 'checkbox'
              type="checkbox"
              // Setting the checked state of the checkbox to the showKeys state variable (true/false)
              checked={showKeys}
              // Adding an onChange event listener to the checkbox to handle showKeys changes
              // handleKeysCheckbox => setShowKeys => showKeys
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
