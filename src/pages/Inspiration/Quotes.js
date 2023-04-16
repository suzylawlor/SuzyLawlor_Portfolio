import { useState } from "react";
import styles from "./quotes.module.css";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const url = "https://api.quotable.io/random";

  const getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        setQuote(item.content);
        setAuthor(item.author);
        setLoaded(true);
      });
  };

  const handleClick = () => {
    setButtonClicked(true);
    getQuote();
  };

  return (
    <>
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
