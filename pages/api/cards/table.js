import { Deck, Hand } from "../../../lib/deck/deck";

const deck = new Deck();
let table = deck.dispatchCards(5);

const tableEndpoint = (req, res) => {
  // console.log(table);
  res.status(200).json(table);
};

export default tableEndpoint;
