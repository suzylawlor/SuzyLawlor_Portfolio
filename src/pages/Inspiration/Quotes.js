// API exercise
// Scoped styling

import { useState } from "react";

import styles from "./quotes.module.css";

// Create a functional component and start building our quote generator
const QuoteGenerator = () => {
  // useState hook to create and initialise the state variables:

  // State variable for quote
  //'quote' to store quote. Initial state set to empty
  //'setQuote' function to update 'quote'
  const [quote, setQuote] = useState("");

  // State variable for author
  // 'author' to store name of quotee. Initial state set to empty
  // 'setAuthor' function to update 'author'
  const [author, setAuthor] = useState("");

  // State variable for loaded
  //'loaded' to store true/false information. Initial state set to false
  //'setLoaded' function to update 'loaded'
  const [loaded, setLoaded] = useState(false);

  // State variable for buttonClicked
  // 'buttonClicked' to store clicked/unclicked information. Initial state set to unclicked
  // 'setButtonClicked' function to update 'buttonClicked'
  const [buttonClicked, setButtonClicked] = useState(false);

  // Define the URL for the quote API
  const url = "https://api.quotable.io/random";

  // Create function to fetch a random quote from the API
  const getQuote = () => {
    // Send a GET request to the API
    fetch(url)
      // Parse the response as JSON
      .then((data) => data.json())
      // Update the state variables with the fetched quote data
      .then((item) => {
        setQuote(item.content);
        setAuthor(item.author);
        setLoaded(true);
      });
  };

  // Function to handle button click event
  // When button is clicked:
  const handleClick = () => {
    // Set buttonClicked to true
    setButtonClicked(true);
    // Call the getQuote function to fetch a new quote
    getQuote();
  };

  return (
    <>
      <div className={styles.glowing}>
        {/* Render span elements with an inline style defining CSS variable "--i" with a value of 1, 2 and 3 */}
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
      </div>
      <div className={styles.glowing}>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
      </div>
      <div className={styles.glowing}>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
         
          {/* Has the data been loaded? (handleClick function activated?) */}
          {loaded ? (
            // If data has been loaded, render data from quote and author variables
            // Include dash before author name
            <>
              <p>{quote}</p>
              <h3>- {author}</h3>
            </>
          ) : (
            // If data has not been loaded, render paragraph and text based on the "buttonClicked" variable
            <p className={styles.noLoadDisplay}>
              {buttonClicked
                ? // Display if the button has been clicked
                  "Fetching quote..."
                : // Display if the button has not been clicked
                  "Are you ready to be inspired?"}
            </p>
          )}
          {/* Button assigned to handleClick function */}
          <button onClick={handleClick} className={styles.button}>
            Get Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default QuoteGenerator;
