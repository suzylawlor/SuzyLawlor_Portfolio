// Import the useState hook from the React library
import { useState } from "react";
// Import the CSS styles from the quotes.module.css file
import styles from "./quotes.module.css";

// Define a functional component called QuoteGenerator
const QuoteGenerator = () => {
  // Define a functional component called QuoteGenerator
  const [quote, setQuote] = useState(""); // State variable to store the quote
  const [author, setAuthor] = useState(""); // State variable to store the author
  const [loaded, setLoaded] = useState(false); // State variable to track if data has been loaded
  const [buttonClicked, setButtonClicked] = useState(false); // State variable to track if the button has been clicked

  // Define the URL for the quote API
  const url = "https://api.quotable.io/random";

  // Define a function to fetch a random quote from the API
  const getQuote = () => {
    fetch(url) // Send a GET request to the API
      .then((data) => data.json()) // Parse the response as JSON
      .then((item) => {
        // Update the state variables with the fetched quote data
        setQuote(item.content);
        setAuthor(item.author);
        setLoaded(true); // Set loaded to true to indicate that data has been loaded
      });
  };

  // Define a function to handle the button click event
  const handleClick = () => {
    setButtonClicked(true); // Set buttonClicked to true
    getQuote(); // Call the getQuote function to fetch a new quote
  };

  // Render the JSX elements
  return (
    <>
      {/* Render an empty div with the class name from styles.body */}
      <div className={styles.body}></div>
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
      <div className={styles.glowing}>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className="quotes-container"></div>
          {loaded ? (
            <>
              <p id="quote" className={styles.quote}>
                {quote}
              </p>
              <h3 id="author" className={styles.author}>
                - {author}
              </h3>
            </>
          ) : (
            <p className={styles.p}>
              {buttonClicked
                ? "Fetching quote..."
                : "Are you ready to be inspired?"}
            </p>
          )}
          <button id="btn" onClick={handleClick} className={styles.button}>
            Get Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default QuoteGenerator;
