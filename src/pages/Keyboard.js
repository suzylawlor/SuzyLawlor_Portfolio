import { useState, useEffect } from "react";
import Head from "next/head";

const Piano = () => {
  const [allKeys, setAllKeys] = useState([]);
  const [volume, setVolume] = useState(0.5);
  const [showKeys, setShowKeys] = useState(true);
  const [audio, setAudio] = useState(null);
  

  useEffect(() => {
    setAudio(new Audio("/music/a.wav"));
  }, []);

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

  const playTune = (key) => {
    
    audio.src = `/music/${key}.wav`;
    audio.volume = volume;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
      clickedKey.classList.remove("active");
    }, 150);
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  const handleKeysCheckbox = () => {
    setShowKeys((prevShowKeys) => !prevShowKeys);
  };

  const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
  };

  const renderedKeys = pianoKeys.map((pianoKey) => (
    <li
      key={pianoKey.key}
      className={`${pianoKey.className} ${showKeys ? "" : "hide"}`}
      data-key={pianoKey.key}
      onClick={() => playTune(pianoKey.key)}
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
            <span>Volume</span>{" "}
            <input
              type="range"
              min="0"
              max="1"
              value={volume}
              step="any"
              onChange={handleVolume}
            />
          </div>
          <div className="column keys-checkbox">
            <span>Show Keys</span>{" "}
            <input
              type="checkbox"
              checked={showKeys}
              onChange={handleKeysCheckbox}
            />
          </div>
        </header>
        <ul className="piano-keys">{renderedKeys}</ul>
      </div>
    </div>
  );
};

export default Piano;
