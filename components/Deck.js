import React, { useState, useEffect, Fragment } from "react";
import Card from "./Card";
import styles from "../styles/Deck.module.scss";

const Deck = ({ title, path, flipped, flipCards }) => {
  const [cards, setCards] = useState([]);
  const [buttonFlip, setButtonFlip] = useState(false);
  useEffect(() => {
    (async () => {
      setCards(await (await fetch(`${path}`)).json());
    })();
  }, [path]);

  return (
    <div className={styles.head}>
      {cards.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <h3>{title}</h3>
          <div className={styles.deck}>
            {cards.map((card, index) => {
              const number = card.slice(0, -1);
              const symbol = card.slice(-1);
              // console.log("number", number);
              // console.log("symbol", symbol);
              const isCardFlipped = parseInt(flipped, 10) > index;
              return (
                <Fragment>
                  <Card
                    symbol={symbol}
                    number={number.toString()}
                    key={index}
                    flipped={isCardFlipped}
                    buttonFlip={buttonFlip}
                  />
                </Fragment>
              );
            })}
          </div>
          {flipCards ? (
            <button onClick={() => setButtonFlip(flipped)}>{flipCards}</button>
          ) : null}
        </Fragment>
      )}
    </div>
  );
};

export default Deck;
