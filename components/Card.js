import React, { useState } from "react";
import styles from "../styles/Card.module.scss";

const Card = ({ number, symbol, flipped, buttonFlip }) => {
  const isNumber = !isNaN(number);
  const isAce = (num, sym) =>
    num === "A" ? <div id={styles.ace}>{sym}</div> : "";
  const [isFlipped, setIsFlipped] = useState(flipped);

  const cardClassName = isFlipped
    ? `${styles["card"] + " " + styles["flipped"]}`
    : styles.card;
  const frontClass = `${styles["front"] + " " + styles[`${number}`]}`;
  // console.log(frontClass);
  return (
    <div
      className={cardClassName}
      symbol={symbol}
      number={number}
      onClick={() => setIsFlipped(!isFlipped)}>
      <div className={styles.container}>
        <div className={styles.front}>
          <div className={styles["card-corner"] + " " + styles["top-left"]}>
            <div className={styles.number}>{number}</div>
            <div className={styles.symbol}>{symbol}</div>
          </div>
          <div className={styles.symbols}>
            {isNumber
              ? new Array(parseInt(number, 10))
                  .fill(symbol)
                  .map((cardSymbol, index) => (
                    <div key={index}>{cardSymbol}</div>
                  ))
              : isAce(number, symbol)}
          </div>
          <div className={styles["card-corner"] + " " + styles["bottom-right"]}>
            <div>{number}</div>
            <div>{symbol}</div>
          </div>
        </div>
        <div className={styles.back}></div>
      </div>
    </div>
  );
};

export default Card;
