import { Deck, Hand } from "../../../lib/deck/deck";

const fulldeck = new Deck();

const fulldeckEndpoint = (req, res) => {
  //   console.log(fullDeck);
  res.status(200).json(fulldeck.cards);
};

export default fulldeckEndpoint;
